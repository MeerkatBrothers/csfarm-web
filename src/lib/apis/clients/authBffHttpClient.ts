import { type Result } from '@/lib/types/result';
import { type HttpClientOptions } from '@/lib/apis/interfaces/httpClientOptions';
import bffHttpClient from '@/lib/apis/clients/bffHttpClient';

import reissueToken from '@/features/auth/usecases/reissueToken';

let reissueTokenPromise: Promise<void> | null = null;

const authBffHttpClient = async <T = unknown>({
  method,
  endpoint,
  options = {},
}: HttpClientOptions): Promise<Result<T>> => {
  const requestOptions: RequestInit = {
    ...options,
    method,
    cache: options.cache ?? 'no-store',
    credentials: 'same-origin',
  };

  let response = await bffHttpClient<T>({ method, endpoint, options: requestOptions });
  if (!response.ok && response.statusCode === 401) {
    if (!reissueTokenPromise) {
      reissueTokenPromise = (async () => {
        try {
          await reissueToken();
        } finally {
          reissueTokenPromise = null;
        }
      })();
    }

    try {
      await reissueTokenPromise;
    } catch {
      return response;
    }

    response = await bffHttpClient<T>({ method, endpoint, options: requestOptions });
  }

  return response;
};

export default authBffHttpClient;
