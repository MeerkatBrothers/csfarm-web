import { buildApiServerUrl } from "@/lib/utils/url";
import { CONTENT_TYPE_JSON } from "@/lib/apis/constants/contentType";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";

import { HarvestInsightReqDto } from "@/domains/insight/dtos/request/harvestInsightReqDto";

const harvestInsightSource = async (body: HarvestInsightReqDto, accessToken: string): Promise<void> => {
  const endpoint: string = "insight/harvest";

  await externalFetcher({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "PATCH",
      headers: {
        "Content-type": CONTENT_TYPE_JSON,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    },
    errorMessage: {
      409: "이미 수확한 지식이에요.",
    },
  });
};

export default harvestInsightSource;
