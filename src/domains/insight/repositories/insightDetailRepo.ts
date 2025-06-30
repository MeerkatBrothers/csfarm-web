import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";

import { InsightDetailResDto } from "@/domains/insight/dtos/response/insightDetailResDto";

const insightDetailRepo = async (insightId: number): Promise<Result<InsightDetailResDto>> => {
  const endpoint: string = `insight/detail/${insightId}`;

  const result: Result<InsightDetailResDto> = await internalFetcher<InsightDetailResDto>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "GET",
    },
  });

  return result;
};

export default insightDetailRepo;
