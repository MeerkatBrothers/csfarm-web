import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import { CONTENT_TYPE_JSON } from "@/lib/apis/constants/contentType";
import internalAuthFetcher from "@/lib/apis/fetchers/internalAuthFetcher";

import { HarvestInsightReqDto } from "@/domains/insight/dtos/request/harvestInsightReqDto";

const harvestInsightRepo = async (body: HarvestInsightReqDto): Promise<Result<null>> => {
  const endpoint: string = "insight/harvest";

  const result: Result<null> = await internalAuthFetcher<null>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "POST",
      headers: {
        "Content-type": CONTENT_TYPE_JSON,
      },
      body: JSON.stringify(body),
    },
  });

  return result;
};

export default harvestInsightRepo;
