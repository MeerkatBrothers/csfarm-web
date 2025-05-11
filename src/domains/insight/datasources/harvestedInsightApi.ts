import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";
import ApiResponse from "@/lib/models/apiResponse";

import { HarvestedInsightResDto } from "@/domains/insight/dtos/response/harvestedInsightResDto";

const harvestedInsightApi = async (page: number, size: number, accessToken: string): Promise<ApiResponse<HarvestedInsightResDto>> => {
  const endpoint: string = `insight/harvested?page=${page}&size=${size}`;

  const apiResponse: ApiResponse<HarvestedInsightResDto> = await apiClient<ApiResponse<HarvestedInsightResDto>>({
    url: getServerApiUrl(endpoint),
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });

  return apiResponse;
};

export default harvestedInsightApi;
