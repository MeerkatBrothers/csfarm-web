import { Result } from "@/lib/types/result";
import FetcherOptions from "@/lib/apis/types/fetcherOptions";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";

import reissueToken from "@/domains/auth/usecases/reissueToken";

const internalAuthFetcher = async <T = unknown>({ url, options = {} }: FetcherOptions): Promise<Result<T>> => {
  const requestOptions: RequestInit = {
    ...options,
    cache: options.cache ?? "no-store",
    credentials: "same-origin",
  };

  const responseData: Result<T> = await internalFetcher({ url, options: requestOptions });
  if (!responseData.ok && responseData.statusCode === 401) {
    try {
      await reissueToken();
    } catch (e) {
      return responseData;
    }

    const tokenReissuedResponseData: Result<T> = await internalFetcher({ url, options: requestOptions });

    return tokenReissuedResponseData;
  }

  return responseData;
};

export default internalAuthFetcher;
