import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";

const withdrawApi = async (): Promise<Result<null>> => {
  const endpoint: string = "/auth/withdraw";

  const result: Result<null> = await internalFetcher({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "DELETE",
    },
  });

  return result;
};

export default withdrawApi;
