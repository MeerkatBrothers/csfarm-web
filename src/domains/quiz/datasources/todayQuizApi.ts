import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import ApiResponse from "@/lib/models/apiResponse";

import QUIZ_TAG_KEYS from "@/domains/quiz/constants/tagKey";
import { TodayQuizResDto } from "@/domains/quiz/dtos/response/todayQuizResDto";

const todayQuizApi = async (): Promise<ApiResponse<TodayQuizResDto>> => {
  const endpoint: string = "quiz/today";

  const apiResponse: ApiResponse<TodayQuizResDto> = await fetcher<ApiResponse<TodayQuizResDto>>({
    config: {
      url: buildApiServerUrl(endpoint),
      options: {
        method: "GET",
        cache: "force-cache",
        next: {
          tags: QUIZ_TAG_KEYS.TODAY(),
          revalidate: 86400,
        },
      },
    },
  });

  return apiResponse;
};

export default todayQuizApi;
