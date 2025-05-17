import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import ApiResponse from "@/lib/models/apiResponse";
import withAccessTokenInterceptor from "@/lib/apis/interceptors/request/withAccessTokenInterceptor";
import reissueTokenInterceptor from "@/lib/apis/interceptors/response/reissueTokenInterceptor";

import { QuizStatusResDto } from "@/domains/quiz/dtos/response/quizStatusResDto";

const quizStatusApi = async (quizId: number): Promise<ApiResponse<QuizStatusResDto>> => {
  const endpoint: string = `quiz/status/${quizId}`;

  const apiResponse: ApiResponse<QuizStatusResDto> = await fetcher<ApiResponse<QuizStatusResDto>>({
    config: {
      url: buildApiServerUrl(endpoint),
      options: {
        method: "GET",
      },
    },
    requestInterceptors: [withAccessTokenInterceptor],
    responseInterceptors: [reissueTokenInterceptor],
  });

  return apiResponse;
};

export default quizStatusApi;
