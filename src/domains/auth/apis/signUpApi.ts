import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";

import { CredentialForm } from "@/domains/auth/models/fragments/credentialForm";

const signUpApi = async (credentialForm: CredentialForm): Promise<Result<null>> => {
  const endpoint: string = "/auth/sign-up";

  const result: Result<null> = await internalFetcher({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "POST",
      body: JSON.stringify(credentialForm),
    },
  });

  return result;
};

export default signUpApi;
