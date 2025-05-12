import HttpErrorFactory from "@/lib/errors/http/httpErrorFactory";
import HttpError from "@/lib/errors/http/httpError";
import NetworkError from "@/lib/errors/networkError";
import RequestInterceptor from "@/lib/apis/interceptors/request/requestInterceptor";
import ResponseInterceptor from "@/lib/apis/interceptors/response/responseInterceptor";

interface ErrorMessage {
  [statusCode: number]: string;
}

interface FetcherOptions {
  url: string;
  options?: RequestInit;
  requestInterceptors?: RequestInterceptor[];
  responseInterceptors?: ResponseInterceptor[];
  errorMessage?: ErrorMessage;
}

const fetcher = async <T = unknown>({
  url,
  options = {},
  requestInterceptors = [],
  responseInterceptors = [],
  errorMessage,
}: FetcherOptions): Promise<T> => {
  const { headers, body, cache } = options;
  const isFormData: boolean = body instanceof FormData;

  const requestHeaders: HeadersInit | undefined = body && !isFormData ? { "Content-Type": "application/json", ...headers } : headers;
  const requestCache: RequestCache = cache ?? "no-store";
  const requestOptions: RequestInit = {
    ...options,
    headers: requestHeaders,
    cache: requestCache,
  };

  const request: Request = new Request(url, requestOptions);

  const interceptedRequest: Request = await requestInterceptors.reduce<Promise<Request>>(
    async (next, interceptor) => interceptor(await next),
    Promise.resolve(request),
  );

  try {
    const response: Response = await fetch(interceptedRequest);

    const interceptedResponse: Response = await responseInterceptors.reduce<Promise<Response>>(
      async (next, interceptor) => interceptor(interceptedRequest, await next),
      Promise.resolve(response),
    );
    if (!interceptedResponse.ok) {
      const statusCode: number = interceptedResponse.status;
      const message: string | undefined = errorMessage?.[statusCode];

      throw HttpErrorFactory.create(statusCode, message);
    }

    const json: T = (await interceptedResponse.json()) as T;

    return json;
  } catch (e) {
    if (e instanceof HttpError) {
      throw e;
    }

    throw new NetworkError();
  }
};

export default fetcher;
