import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalAuthFetcher from "@/lib/apis/fetchers/internalAuthFetcher";

import { TodayQuizResDto } from "@/domains/quiz/dtos/response/todayQuizResDto";

const todayQuizRepo = async (): Promise<Result<TodayQuizResDto>> => {
  const endpoint: string = "quiz/today";

  const result: Result<TodayQuizResDto> = await internalAuthFetcher<TodayQuizResDto>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "GET",
    },
  });

  return result;
};

export default todayQuizRepo;
