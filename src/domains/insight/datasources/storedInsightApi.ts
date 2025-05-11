import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";
import ApiResponse from "@/lib/models/apiResponse";

import { StoredInsightResDto } from "@/domains/insight/dtos/response/storedInsightResDto";

const storedInsightApi = async (): Promise<ApiResponse<StoredInsightResDto>> => {
  const endpoint: string = "insight/storage";

  const apiResponse: ApiResponse<StoredInsightResDto> = await apiClient<ApiResponse<StoredInsightResDto>>({
    url: getServerApiUrl(endpoint),
    options: {
      method: "GET",
      cache: "force-cache",
      next: {
        revalidate: 3600,
      },
    },
  });

  return apiResponse;
};

export default storedInsightApi;
