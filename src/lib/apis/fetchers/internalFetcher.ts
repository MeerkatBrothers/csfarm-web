import { Result, failed } from "@/lib/types/result";
import FetcherOptions from "@/lib/apis/types/fetcherOptions";
import InternalServerError from "@/lib/errors/http/internalServerError";

const internalFetcher = async <T = unknown>({ url, options = {} }: FetcherOptions): Promise<Result<T>> => {
  try {
    const requestOptions: RequestInit = {
      ...options,
      cache: options.cache ?? "no-store",
    };

    const response: Response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new InternalServerError();
    }

    const result: Result<T> = (await response.json()) as Result<T>;

    return result;
  } catch (e) {
    return failed(e);
  }
};

export default internalFetcher;
