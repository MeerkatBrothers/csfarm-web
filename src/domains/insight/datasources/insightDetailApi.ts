import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";
import ApiResponse from "@/lib/models/apiResponse";

import { InsightDetailResDto } from "@/domains/insight/dtos/response/insightDetailResDto";

const insightDetailApi = async (insightId: number): Promise<ApiResponse<InsightDetailResDto>> => {
  const endpoint: string = `insight/${insightId}`;

  const apiResponse: ApiResponse<InsightDetailResDto> = await apiClient<ApiResponse<InsightDetailResDto>>({
    url: getServerApiUrl(endpoint),
    options: {
      method: "GET",
    },
  });

  return apiResponse;
};

export default insightDetailApi;
