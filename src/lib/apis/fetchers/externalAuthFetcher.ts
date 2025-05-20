import FetcherOptions from "@/lib/apis/types/fetcherOptions";
import ErrorMessage from "@/lib/apis/types/errorMessage";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

interface ExternalAuthFetcherOptions extends FetcherOptions {
  accessToken: string;
  errorMessage?: ErrorMessage;
}

const externalAuthFetcher = async <T = unknown>({
  url,
  options = {},
  accessToken,
  errorMessage,
}: ExternalAuthFetcherOptions): Promise<T> => {
  try {
    const requestOptions: RequestInit = {
      ...options,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const responseData: T = await externalFetcher({ url, options: requestOptions, errorMessage });

    return responseData;
  } catch (e) {
    if (e instanceof UnauthorizedError) {
      // 토큰 재발급 로직 작성
    }

    throw e;
  }
};

export default externalAuthFetcher;
