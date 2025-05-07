import HttpErrorFactory from "@/lib/errors/http/httpErrorFactory";
import HttpError from "@/lib/errors/http/httpError";
import NetworkError from "@/lib/errors/networkError";

interface ErrorMessage {
  [statusCode: number]: string;
}

export interface ApiOptions {
  url: string;
  options?: RequestInit;
  errorMessage?: ErrorMessage;
}

const apiClient = async <T = unknown>({
  url,
  options = {},
  errorMessage,
}: ApiOptions): Promise<T> => {
  try {
    const isFormData: boolean = options.body instanceof FormData;
    const headers = isFormData
      ? options.headers ?? {}
      : { "Content-Type": "application/json", ...(options.headers ?? {}) };

    const response: Response = await fetch(url, {
      ...options,
      headers,
      cache: "no-store",
    });
    if (!response.ok) {
      const statusCode: number = response.status;
      const message: string | undefined = errorMessage?.[statusCode];

      throw HttpErrorFactory.create(statusCode, message);
    }
    const json: T = (await response.json()) as T;

    return json;
  } catch (e) {
    if (e instanceof HttpError) {
      throw e;
    }

    throw new NetworkError();
  }
};

export default apiClient;
