import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";
import ApiResponse from "@/lib/models/apiResponse";

import INSIGHT_TAG_KEYS from "@/domains/insight/constants/tagKey";
import { StoredInsightResDto } from "@/domains/insight/dtos/response/storedInsightResDto";

const storedInsightApi = async (): Promise<ApiResponse<StoredInsightResDto>> => {
  const endpoint: string = "insight/storage";

  const apiResponse: ApiResponse<StoredInsightResDto> = await apiClient<ApiResponse<StoredInsightResDto>>({
    url: getServerApiUrl(endpoint),
    options: {
      method: "GET",
      cache: "force-cache",
      next: {
        tags: INSIGHT_TAG_KEYS.STORAGED(),
        revalidate: 86400,
      },
    },
  });

  return apiResponse;
};

export default storedInsightApi;
