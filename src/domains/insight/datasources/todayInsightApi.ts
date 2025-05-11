import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";
import ApiResponse from "@/lib/models/apiResponse";

import INSIGHT_TAG_KEYS from "@/domains/insight/constants/tagKey";
import { TodayInsightResDto } from "@/domains/insight/dtos/response/todayInsightResDto";

const todayInsightApi = async (): Promise<ApiResponse<TodayInsightResDto>> => {
  const endpoint: string = "insight/today";

  const apiResponse: ApiResponse<TodayInsightResDto> = await apiClient<ApiResponse<TodayInsightResDto>>({
    url: getServerApiUrl(endpoint),
    options: {
      method: "GET",
      cache: "force-cache",
      next: {
        tags: INSIGHT_TAG_KEYS.TODAY(),
        revalidate: 86400,
      },
    },
  });

  return apiResponse;
};

export default todayInsightApi;
