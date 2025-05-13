import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import ApiResponse from "@/lib/models/apiResponse";

import INSIGHT_TAG_KEYS from "@/domains/insight/constants/tagKey";
import { InsightDetailResDto } from "@/domains/insight/dtos/response/insightDetailResDto";

const insightDetailApi = async (insightId: number): Promise<ApiResponse<InsightDetailResDto>> => {
  const endpoint: string = `insight/${insightId}`;

  const apiResponse: ApiResponse<InsightDetailResDto> = await fetcher<ApiResponse<InsightDetailResDto>>({
    config: {
      url: buildApiServerUrl(endpoint),
      options: {
        method: "GET",
        cache: "force-cache",
        next: {
          tags: INSIGHT_TAG_KEYS.DETAIL(insightId),
          revalidate: 3600,
        },
      },
    },
  });

  return apiResponse;
};

export default insightDetailApi;
