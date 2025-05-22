import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";

import INSIGHT_TAG_KEYS from "@/domains/insight/constants/tagKey";
import { InsightDetailResDto } from "@/domains/insight/dtos/response/insightDetailResDto";

const insightDetailRepo = async (insightId: number): Promise<Result<InsightDetailResDto>> => {
  const endpoint: string = `insight/${insightId}`;

  const result: Result<InsightDetailResDto> = await internalFetcher<InsightDetailResDto>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "GET",
      cache: "force-cache",
      next: {
        tags: INSIGHT_TAG_KEYS.DETAIL(insightId),
        revalidate: 3600,
      },
    },
  });

  return result;
};

export default insightDetailRepo;
