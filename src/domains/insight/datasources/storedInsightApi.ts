import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import ApiResponse from "@/lib/models/apiResponse";

import INSIGHT_TAG_KEYS from "@/domains/insight/constants/tagKey";
import { StoredInsightResDto } from "@/domains/insight/dtos/response/storedInsightResDto";

const storedInsightApi = async (): Promise<ApiResponse<StoredInsightResDto>> => {
  const endpoint: string = "insight/storage";

  const apiResponse: ApiResponse<StoredInsightResDto> = await fetcher<ApiResponse<StoredInsightResDto>>({
    config: {
      url: buildApiServerUrl(endpoint),
      options: {
        method: "GET",
        cache: "force-cache",
        next: {
          tags: INSIGHT_TAG_KEYS.STORAGED(),
          revalidate: 86400,
        },
      },
    },
  });

  return apiResponse;
};

export default storedInsightApi;
