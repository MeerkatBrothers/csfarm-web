import { Result } from "@/lib/types/result";
import FetcherOptions from "@/lib/apis/types/fetcherOptions";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";
import reissueToken from "@/domains/auth/usecases/reissueToken";

let reissueTokenPromise: Promise<void> | null = null;

const internalAuthFetcher = async <T = unknown>({ url, options = {} }: FetcherOptions): Promise<Result<T>> => {
  const requestOptions: RequestInit = {
    ...options,
    cache: options.cache ?? "no-store",
    credentials: "same-origin",
  };

  let responseData: Result<T> = await internalFetcher({ url, options: requestOptions });

  if (!responseData.ok && responseData.statusCode === 401) {
    try {
      if (!reissueTokenPromise) {
        reissueTokenPromise = reissueToken()
          .then(() => {
            reissueTokenPromise = null;
          })
          .catch((e) => {
            reissueTokenPromise = null;

            throw e;
          });
      }
      await reissueTokenPromise;
    } catch (e) {
      return responseData;
    }

    responseData = await internalFetcher({ url, options: requestOptions });
  }

  return responseData;
};

export default internalAuthFetcher;
