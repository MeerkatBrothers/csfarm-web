import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalAuthFetcher from "@/lib/apis/fetchers/internalAuthFetcher";

import { MyProfileResDto } from "@/domains/profile/dtos/response/myProfileResDto";

const myProfileRepo = async (): Promise<Result<MyProfileResDto>> => {
  const endpoint: string = "profile/my";

  const result: Result<MyProfileResDto> = await internalAuthFetcher<MyProfileResDto>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "GET",
    },
  });

  return result;
};

export default myProfileRepo;
