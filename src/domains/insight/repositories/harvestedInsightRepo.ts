import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalAuthFetcher from "@/lib/apis/fetchers/internalAuthFetcher";

import { HarvestedInsightResDto } from "@/domains/insight/dtos/response/harvestedInsightResDto";

const harvestedInsightRepo = async (page: number, size: number): Promise<Result<HarvestedInsightResDto>> => {
  const endpoint: string = `insight/harvested?page=${page}&size=${size}`;

  const result: Result<HarvestedInsightResDto> = await internalAuthFetcher<HarvestedInsightResDto>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "GET",
    },
  });

  return result;
};

export default harvestedInsightRepo;
