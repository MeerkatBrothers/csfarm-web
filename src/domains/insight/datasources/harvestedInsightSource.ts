import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { HarvestedInsightResDto } from "@/domains/insight/dtos/response/harvestedInsightResDto";

const harvestedInsightSource = async (page: number, size: number, accessToken: string): Promise<ApiResponse<HarvestedInsightResDto>> => {
  const endpoint: string = `insight/harvested?page=${page}&size=${size}`;

  const apiResponse: ApiResponse<HarvestedInsightResDto> = await externalFetcher<ApiResponse<HarvestedInsightResDto>>({
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

export default harvestedInsightSource;
