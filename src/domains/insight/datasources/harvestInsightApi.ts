import { CONTENT_TYPE_JSON } from "@/lib/apis/constants/contentType";
import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import withAccessTokenInterceptor from "@/lib/apis/interceptors/request/withAccessTokenInterceptor";
import reissueTokenInterceptor from "@/lib/apis/interceptors/response/reissueTokenInterceptor";

import { HarvestInsightReqDto } from "@/domains/insight/dtos/request/harvestInsightReqDto";

const harvestInsightApi = async (body: HarvestInsightReqDto): Promise<void> => {
  const endpoint: string = "insight/harvest";

  await fetcher({
    config: {
      url: buildApiServerUrl(endpoint),
      options: {
        method: "PATCH",
        headers: {
          "Content-type": CONTENT_TYPE_JSON,
        },
        body: JSON.stringify(body),
      },
    },
    requestInterceptors: [withAccessTokenInterceptor],
    responseInterceptors: [reissueTokenInterceptor],
    errorMessage: {
      409: "이미 수확한 지식이에요.",
    },
  });
};

export default harvestInsightApi;
