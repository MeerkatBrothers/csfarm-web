import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { InsightStatusResDto } from "@/domains/insight/dtos/response/insightStatusResDto";

const insightStatusSource = async (insightId: number, accessToken: string): Promise<ApiResponse<InsightStatusResDto>> => {
  const endpoint: string = `insight/status/${insightId}`;

  const apiResponse: ApiResponse<InsightStatusResDto> = await externalFetcher<ApiResponse<InsightStatusResDto>>({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });

  return apiResponse;
};

export default insightStatusSource;
