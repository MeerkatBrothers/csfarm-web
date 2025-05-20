import { Result } from "@/lib/types/result";

import FetcherOptions from "@/lib/apis/types/fetcherOptions";

const internalFetcher = async <T = unknown>({ url, options = {} }: FetcherOptions): Promise<Result<T>> => {
  const requestOptions: RequestInit = {
    ...options,
    cache: options.cache ?? "no-store",
  };

  const response: Response = await fetch(url, requestOptions);

  const result: Result<T> = (await response.json()) as Result<T>;

  return result;
};

export default internalFetcher;
