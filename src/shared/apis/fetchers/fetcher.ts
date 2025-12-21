import { normalizeOrigin, normalizeEndpoint } from '@/shared/utils/url';
import type { BaseFetcherOptions } from '@/shared/apis/interfaces/base-fetcher.options';
import HttpError from '@/shared/errors/api/http-error';
import ApiRequestError from '@/shared/errors/client/api-request-error';

interface FetcherOptions extends BaseFetcherOptions {
  origin: string;
}

const fetcher = async <T = unknown>({
  origin,
  endpoint,
  method,
  options = {},
}: FetcherOptions): Promise<T> => {
  const normalizedOrigin = normalizeOrigin(origin);
  const normalizedEndpoint = normalizeEndpoint(endpoint);
  const url = `${normalizedOrigin}/${normalizedEndpoint}`;

  const requestOptions: RequestInit = {
    ...options,
    method,
    cache: 'no-store',
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      const statusCode = response.status;

      throw new HttpError(statusCode);
    }

    const body = await response.text();

    return body ? (JSON.parse(body) as T) : (null as T);
  } catch (e) {
    if (e instanceof HttpError) throw e;

    throw new ApiRequestError();
  }
};

export default fetcher;
