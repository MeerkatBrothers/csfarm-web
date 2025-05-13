import { RequestConfig } from "@/lib/apis/types/config";
import RequestInterceptor from "@/lib/apis/interceptors/request/requestInterceptor";
import ResponseInterceptor from "@/lib/apis/interceptors/response/responseInterceptor";
import HttpErrorFactory from "@/lib/errors/http/httpErrorFactory";
import HttpError from "@/lib/errors/http/httpError";
import NetworkError from "@/lib/errors/networkError";

interface ErrorMessage {
  [statusCode: number]: string;
}

interface FetcherOptions {
  config: RequestConfig;
  requestInterceptors?: RequestInterceptor[];
  responseInterceptors?: ResponseInterceptor[];
  errorMessage?: ErrorMessage;
}

const fetcher = async <T = unknown>({
  config,
  requestInterceptors = [],
  responseInterceptors = [],
  errorMessage,
}: FetcherOptions): Promise<T> => {
  const { url, init = {} } = config;

  const requestInit: RequestInit = {
    ...init,
    cache: init.cache ?? "no-store",
  };

  try {
    const interceptedConfig: RequestConfig = await requestInterceptors.reduce<Promise<RequestConfig>>(
      async (next, curr) => curr(await next),
      Promise.resolve<RequestConfig>({ url, init: requestInit }),
    );

    const request: Request = new Request(interceptedConfig.url, interceptedConfig.init);

    const response: Response = await fetch(request);

    const interceptedResponse: Response = await responseInterceptors.reduce<Promise<Response>>(
      async (next, interceptor) => interceptor(interceptedConfig, await next),
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
