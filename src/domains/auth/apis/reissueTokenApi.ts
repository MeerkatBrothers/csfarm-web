import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";

import { Token } from "@/domains/auth/models/fragments/token";

const reissueTokenApi = async (): Promise<Result<Token>> => {
  const endpoint: string = "/auth/reissue-token";

  const result: Result<Token> = await internalFetcher({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "POST",
    },
  });

  return result;
};

export default reissueTokenApi;
