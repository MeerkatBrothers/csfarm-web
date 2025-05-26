import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";

import INSIGHT_TAG_KEYS from "@/domains/insight/constants/tagKey";
import { StoredInsightResDto } from "@/domains/insight/dtos/response/storedInsightResDto";

const storedInsightRepo = async (): Promise<Result<StoredInsightResDto>> => {
  const endpoint: string = "insight/storage";

  const result: Result<StoredInsightResDto> = await internalFetcher<StoredInsightResDto>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "GET",
      cache: "force-cache",
      next: {
        tags: INSIGHT_TAG_KEYS.STORAGED(),
        revalidate: 86400,
      },
    },
  });

  return result;
};

export default storedInsightRepo;
