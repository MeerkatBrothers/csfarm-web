import FetcherOptions from "@/lib/apis/types/fetcherOptions";
import ErrorMessage from "@/lib/apis/types/errorMessage";
import HttpErrorFactory from "@/lib/errors/http/httpErrorFactory";
import HttpError from "@/lib/errors/http/httpError";
import NetworkError from "@/lib/errors/networkError";

interface ExternalFetcherOptions extends FetcherOptions {
  errorMessage?: ErrorMessage;
}

const externalFetcher = async <T = unknown>({ url, options = {}, errorMessage }: ExternalFetcherOptions): Promise<T> => {
  const requestOptions: RequestInit = {
    ...options,
    cache: options.cache ?? "no-store",
  };

  try {
    const response: Response = await fetch(url, requestOptions);
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

export default externalFetcher;
