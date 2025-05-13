import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import ApiResponse from "@/lib/models/apiResponse";

import INSIGHT_TAG_KEYS from "@/domains/insight/constants/tagKey";
import { TodayInsightResDto } from "@/domains/insight/dtos/response/todayInsightResDto";

const todayInsightApi = async (): Promise<ApiResponse<TodayInsightResDto>> => {
  const endpoint: string = "insight/today";

  const apiResponse: ApiResponse<TodayInsightResDto> = await fetcher<ApiResponse<TodayInsightResDto>>({
    config: {
      url: buildApiServerUrl(endpoint),
      options: {
        method: "GET",
        cache: "force-cache",
        next: {
          tags: INSIGHT_TAG_KEYS.TODAY(),
          revalidate: 86400,
        },
      },
    },
  });

  return apiResponse;
};

export default todayInsightApi;
