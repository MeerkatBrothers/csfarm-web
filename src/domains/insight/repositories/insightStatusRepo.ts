import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalAuthFetcher from "@/lib/apis/fetchers/internalAuthFetcher";

import { InsightStatusResDto } from "@/domains/insight/dtos/response/insightStatusResDto";

const insightStatusRepo = async (insightId: number): Promise<Result<InsightStatusResDto>> => {
  const endpoint: string = `insight/status/${insightId}`;

  const result: Result<InsightStatusResDto> = await internalAuthFetcher<InsightStatusResDto>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "GET",
    },
  });

  return result;
};

export default insightStatusRepo;
