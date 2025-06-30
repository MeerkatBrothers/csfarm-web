import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { TodayQuizResDto } from "@/domains/quiz/dtos/response/todayQuizResDto";

const todayQuizSource = async (accessToken: string): Promise<ApiResponse<TodayQuizResDto>> => {
  const endpoint: string = "quiz/today";

  const apiResponse: ApiResponse<TodayQuizResDto> = await externalFetcher<ApiResponse<TodayQuizResDto>>({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });

  return apiResponse;
};

export default todayQuizSource;
