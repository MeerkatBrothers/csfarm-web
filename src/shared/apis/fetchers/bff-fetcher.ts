import { normalizeEndpoint } from '@/shared/utils/url';
import type { BaseFetcherOptions } from '@/shared/apis/interfaces/base-fetcher.options';
import { ApiErrorCode } from '@/shared/errors/api-error-code';
import ApiRequestError from '@/shared/errors/client/api-request-error';
import ResultError from '@/shared/errors/client/result-error';
import { failed, type Result } from '@/shared/types/result';

import reissueToken from '@/features/auth/api/bff/reissue-token';

let reissueTokenPromise: Promise<void> | null = null;

const bffFetcher = async <T = unknown>({
  endpoint,
  method,
  options,
}: BaseFetcherOptions): Promise<Result<T>> => {
  const normalizedEndpoint = normalizeEndpoint(endpoint);
  const url = `/api/${normalizedEndpoint}`;

  const requestOptions: RequestInit = {
    ...options,
    method,
    cache: 'no-store',
    credentials: 'same-origin',
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = (await response.json()) as Result<T>;

    if (!response.ok && 'code' in data && data.code === ApiErrorCode.E40101002) {
      if (!reissueTokenPromise) {
        reissueTokenPromise = (async () => {
          try {
            const result = await reissueToken();
            if (!result.ok) throw new ResultError(result.statusCode, result.code);
          } finally {
            reissueTokenPromise = null;
          }
        })();
      }

      try {
        await reissueTokenPromise;
      } catch (e) {
        return failed(e);
      }

      const retryResponse = await fetch(url, requestOptions);

      return (await retryResponse.json()) as Result<T>;
    }

    return data;
  } catch {
    return failed(new ApiRequestError());
  }
};

export default bffFetcher;
