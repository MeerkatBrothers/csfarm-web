import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";
import ApiResponse from "@/lib/models/apiResponse";

import { TodayInsightResDto } from "@/domains/insight/dtos/response/todayInsightResDto";

const todayInsightApi = async (accessToken: string | null): Promise<ApiResponse<TodayInsightResDto>> => {
  const endpoint: string = "insight/today";

  const apiResponse: ApiResponse<TodayInsightResDto> = await apiClient<ApiResponse<TodayInsightResDto>>({
    url: getServerApiUrl(endpoint),
    options: {
      method: "GET",
      headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined,
    },
  });

  return apiResponse;
};

export default todayInsightApi;
