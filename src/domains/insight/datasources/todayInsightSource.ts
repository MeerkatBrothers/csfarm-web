import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { TodayInsightResDto } from "@/domains/insight/dtos/response/todayInsightResDto";

const todayInsightSource = async (): Promise<ApiResponse<TodayInsightResDto>> => {
  const endpoint: string = "insight/today";

  const apiResponse: ApiResponse<TodayInsightResDto> = await externalFetcher<ApiResponse<TodayInsightResDto>>({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "GET",
    },
  });

  return apiResponse;
};

export default todayInsightSource;
