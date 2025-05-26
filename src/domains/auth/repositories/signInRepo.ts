import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";

import { SignInReqDto } from "@/domains/auth/dtos/request/signInReqDto";

const signInRepo = async (body: SignInReqDto): Promise<Result<null>> => {
  const endpoint: string = "auth/sign-in";

  const result: Result<null> = await internalFetcher<null>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "POST",
      body: JSON.stringify(body),
      credentials: "same-origin",
    },
  });

  return result;
};

export default signInRepo;
