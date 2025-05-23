import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalAuthFetcher from "@/lib/apis/fetchers/internalAuthFetcher";

import { MyProgressResDto } from "@/domains/progress/dtos/request/myProgressResDto";

const myProgressRepo = async (): Promise<Result<MyProgressResDto>> => {
  const endpoint: string = "progress/my";

  const result: Result<MyProgressResDto> = await internalAuthFetcher<MyProgressResDto>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "GET",
    },
  });

  return result;
};

export default myProgressRepo;
