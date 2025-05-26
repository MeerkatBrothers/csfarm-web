import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { InsightDetailResDto } from "@/domains/insight/dtos/response/insightDetailResDto";

const insightDetailSource = async (insightId: number): Promise<ApiResponse<InsightDetailResDto>> => {
  const endpoint: string = `insight/${insightId}`;

  const apiResponse: ApiResponse<InsightDetailResDto> = await externalFetcher<ApiResponse<InsightDetailResDto>>({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "GET",
    },
  });

  return apiResponse;
};

export default insightDetailSource;
