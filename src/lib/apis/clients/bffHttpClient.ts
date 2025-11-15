import { failed, type Result } from '@/lib/types/result';
import { type HttpClientOptions } from '@/lib/apis/interfaces/httpClientOptions';
import { normalizeEndpoint } from '@/lib/utils/url';

const bffHttpClient = async <T = unknown>({
  endpoint,
  options = {},
}: HttpClientOptions): Promise<Result<T>> => {
  const normalizedEndpoint = normalizeEndpoint(endpoint);
  const url = `/api/${normalizedEndpoint}`;

  try {
    const requestOptions: RequestInit = {
      ...options,
      cache: options.cache ?? 'no-store',
    };

    const response = await fetch(url, requestOptions);
    const data = (await response.json()) as Result<T>;

    return data;
  } catch (e) {
    return failed(e);
  }
};

export default bffHttpClient;
