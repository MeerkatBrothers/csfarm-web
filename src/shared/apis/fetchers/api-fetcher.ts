import { normalizeEndpoint } from '@/shared/utils/url';
import type { BaseFetcherOptions } from '@/shared/apis/interfaces/base-fetcher.options';
import ApiErrorFactory from '@/shared/errors/api/api-error.factory';
import ApiError from '@/shared/errors/api/api-error';
import ApiRequestError from '@/shared/errors/client/api-request-error';

interface ApiFetcherOptions extends BaseFetcherOptions {
  cache?: RequestCache;
  token?: string;
}

const apiFetcher = async <T = unknown>({
  endpoint,
  method,
  options = {},
  cache = 'no-store',
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
    cache,
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
    if (!body) return null as T;

    try {
      return JSON.parse(body) as T;
    } catch {
      return body as unknown as T;
    }
  } catch (e) {
    if (e instanceof ApiError) throw e;

    throw new ApiRequestError();
  }
};

export default apiFetcher;
