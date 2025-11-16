import { type HttpClientOptions } from '@/lib/apis/interfaces/httpClientOptions';
import HttpErrorFactory from '@/lib/errors/http/httpErrorFactory';
import HttpError from '@/lib/errors/http/httpError';
import InternalServerError from '@/lib/errors/http/internalServerError';

const httpClient = async <T = unknown>({
  method,
  endpoint,
  options = {},
  errorMessages,
}: HttpClientOptions): Promise<T> => {
  const requestOptions: RequestInit = {
    ...options,
    method,
  };

  try {
    const response = await fetch(endpoint, requestOptions);
    if (!response.ok) {
      const statusCode = response.status;
      const errorMessage = errorMessages?.[statusCode];

      throw HttpErrorFactory.create(statusCode, errorMessage);
    }

    const body = await response.text();
    const data = body ? (JSON.parse(body) as T) : (null as T);

    return data;
  } catch (e) {
    if (e instanceof HttpError) {
      throw e;
    }

    throw new InternalServerError();
  }
};

export default httpClient;
