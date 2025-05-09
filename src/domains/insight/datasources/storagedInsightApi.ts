import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";
import ApiResponse from "@/lib/models/apiResponse";

import { StoragedInsightResDto } from "@/domains/insight/dtos/response/storagedInsightResDto";

const storagedInsightApi = async (): Promise<ApiResponse<StoragedInsightResDto>> => {
  const endpoint: string = "insight/storage";

  const apiResponse: ApiResponse<StoragedInsightResDto> = await apiClient<ApiResponse<StoragedInsightResDto>>({
    url: getServerApiUrl(endpoint),
    options: {
      method: "GET",
    },
  });

  return apiResponse;
};

export default storagedInsightApi;
