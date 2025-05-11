import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";
import ApiResponse from "@/lib/models/apiResponse";

import { InsightStatusResDto } from "@/domains/insight/dtos/response/insightStatusResDto";

const insightStatusApi = async (insightId: number, accessToken: string | null): Promise<ApiResponse<InsightStatusResDto>> => {
  const endpoint: string = `insight/status/${insightId}`;

  const apiResponse: ApiResponse<InsightStatusResDto> = await apiClient<ApiResponse<InsightStatusResDto>>({
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

export default insightStatusApi;
