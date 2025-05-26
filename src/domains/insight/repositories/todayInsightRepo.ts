import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";

import INSIGHT_TAG_KEYS from "@/domains/insight/constants/tagKey";
import { TodayInsightResDto } from "@/domains/insight/dtos/response/todayInsightResDto";

const todayInsightRepo = async (): Promise<Result<TodayInsightResDto>> => {
  const endpoint: string = "insight/today";

  const result: Result<TodayInsightResDto> = await internalFetcher<TodayInsightResDto>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "GET",
      cache: "force-cache",
      next: {
        tags: INSIGHT_TAG_KEYS.TODAY(),
        revalidate: 86400,
      },
    },
  });

  return result;
};

export default todayInsightRepo;
