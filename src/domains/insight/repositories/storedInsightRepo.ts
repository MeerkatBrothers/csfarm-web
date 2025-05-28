import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";

import { StoredInsightResDto } from "@/domains/insight/dtos/response/storedInsightResDto";

const storedInsightRepo = async (): Promise<Result<StoredInsightResDto>> => {
  const endpoint: string = "insight/storage";

  const result: Result<StoredInsightResDto> = await internalFetcher<StoredInsightResDto>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "GET",
    },
  });

  return result;
};

export default storedInsightRepo;
