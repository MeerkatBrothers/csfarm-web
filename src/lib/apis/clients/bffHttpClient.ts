import { failed, type Result } from '@/lib/types/result';
import { type HttpClientOptions } from '@/lib/apis/interfaces/httpClientOptions';
import { normalizeEndpoint } from '@/lib/utils/url';

const bffHttpClient = async <T = unknown>({
  method,
  endpoint,
  options = {},
}: HttpClientOptions): Promise<Result<T>> => {
  const normalizedEndpoint = normalizeEndpoint(endpoint);
  const url = `/api/${normalizedEndpoint}`;

  const requestOptions: RequestInit = {
    ...options,
    method,
    cache: options.cache ?? 'no-store',
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = (await response.json()) as Result<T>;

    return data;
  } catch (e) {
    return failed(e);
  }
};

export default bffHttpClient;
