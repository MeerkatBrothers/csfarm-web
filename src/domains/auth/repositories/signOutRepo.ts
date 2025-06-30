import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";

const signOutRepo = async (): Promise<Result<null>> => {
  const endpoint: string = "auth/sign-out";

  const result: Result<null> = await internalFetcher<null>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "DELETE",
      credentials: "same-origin",
    },
  });

  return result;
};

export default signOutRepo;
