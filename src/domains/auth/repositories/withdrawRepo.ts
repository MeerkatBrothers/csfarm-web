import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalAuthFetcher from "@/lib/apis/fetchers/internalAuthFetcher";

const withdrawRepo = async (): Promise<Result<null>> => {
  const endpoint: string = "/auth/withdraw";

  const result: Result<null> = await internalAuthFetcher<null>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "DELETE",
      credentials: "same-origin",
    },
  });

  return result;
};

export default withdrawRepo;
