import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";

const reissueTokenRepo = async (): Promise<Result<null>> => {
  const endpoint: string = "/auth/reissue-token";

  const result: Result<null> = await internalFetcher({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "POST",
      credentials: "same-origin",
    },
  });

  return result;
};

export default reissueTokenRepo;
