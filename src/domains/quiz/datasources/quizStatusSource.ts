import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { QuizStatusResDto } from "@/domains/quiz/dtos/response/quizStatusResDto";

const quizStatusSource = async (quizId: number, accessToken: string): Promise<ApiResponse<QuizStatusResDto>> => {
  const endpoint: string = `quiz/status/${quizId}`;

  const apiResponse: ApiResponse<QuizStatusResDto> = await externalFetcher<ApiResponse<QuizStatusResDto>>({
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

export default quizStatusSource;
