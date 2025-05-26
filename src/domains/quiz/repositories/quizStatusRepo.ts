import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalAuthFetcher from "@/lib/apis/fetchers/internalAuthFetcher";

import { QuizStatusResDto } from "@/domains/quiz/dtos/response/quizStatusResDto";

const quizStatusRepo = async (quizId: number): Promise<Result<QuizStatusResDto>> => {
  const endpoint: string = `quiz/status/${quizId}`;

  const result: Result<QuizStatusResDto> = await internalAuthFetcher<QuizStatusResDto>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "GET",
    },
  });

  return result;
};

export default quizStatusRepo;
