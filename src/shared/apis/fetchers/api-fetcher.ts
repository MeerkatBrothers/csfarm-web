import { normalizeEndpoint } from '@/shared/utils/url';
import type { BaseFetcherOptions } from '@/shared/apis/interfaces/base-fetcher.options';
import ApiErrorFactory from '@/shared/errors/api/api-error.factory';
import ApiError from '@/shared/errors/api/api-error';
import ApiRequestError from '@/shared/errors/client/api-request-error';

interface ApiFetcherOptions extends BaseFetcherOptions {
  next?: NextFetchRequestConfig;
  token?: string;
}

const apiFetcher = async <T = unknown>({
  endpoint,
  method,
  options = {},
  next,
  token,
}: ApiFetcherOptions): Promise<T> => {
  const normalizedEndpoint = normalizeEndpoint(endpoint);
  const url = `${process.env.API_SERVER_URL}/${normalizedEndpoint}`;

  const headers = new Headers(options?.headers ?? {});
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const requestOptions: RequestInit = {
    ...options,
    headers,
    method,
    cache: next?.revalidate ? undefined : 'no-store',
    next,
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      const statusCode = response.status;
      const body = (await response.json()) as { code: string };
      const code = body.code;

      throw ApiErrorFactory.create(statusCode, code);
    }

    const body = await response.text();

    return body ? (JSON.parse(body) as T) : (null as T);
  } catch (e) {
    if (e instanceof ApiError) throw e;

    throw new ApiRequestError();
  }
};

export default apiFetcher;
