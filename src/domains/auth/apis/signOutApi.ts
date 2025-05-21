import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";

const signOutApi = async (): Promise<Result<null>> => {
  const endpoint: string = "/auth/sign-out";

  const result: Result<null> = await internalFetcher({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "DELETE",
    },
  });

  return result;
};

export default signOutApi;
