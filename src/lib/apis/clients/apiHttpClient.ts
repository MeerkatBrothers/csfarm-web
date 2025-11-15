import { failed, success, type Result } from '@/lib/types/result';
import { type HttpClientOptions } from '@/lib/apis/interfaces/httpClientOptions';
import { type HttpErrorMessage } from '@/lib/apis/interfaces/httpErrorMessage';
import { normalizeEndpoint } from '@/lib/utils/url';
import HttpErrorFactory from '@/lib/errors/http/httpErrorFactory';

interface ApiHttpClientOptions extends HttpClientOptions {
  errorMessages?: HttpErrorMessage;
  token?: string;
}

const apiHttpClient = async <T = unknown>({
  endpoint,
  options = {},
  errorMessages,
  token,
}: ApiHttpClientOptions): Promise<Result<T>> => {
  const normalizedEndpoint = normalizeEndpoint(endpoint);
  const url = `${process.env.API_SERVER_URL}/api/${normalizedEndpoint}`;

  const headers = new Headers(options.headers as HeadersInit);

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const requestOptions: RequestInit = {
    ...options,
    headers,
    cache: options.cache ?? 'no-store',
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      const statusCode = response.status;
      const errorMessage = errorMessages?.[statusCode];
      const error = HttpErrorFactory.create(statusCode, errorMessage);

      return failed(error);
    }

    const body = await response.text();
    const data = body ? (JSON.parse(body) as T) : null;

    return success(data);
  } catch (e) {
    return failed(e);
  }
};

export default apiHttpClient;
