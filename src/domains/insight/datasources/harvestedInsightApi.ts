import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import ApiResponse from "@/lib/models/apiResponse";
import withAccessTokenInterceptor from "@/lib/apis/interceptors/request/withAccessTokenInterceptor";
import reissueTokenInterceptor from "@/lib/apis/interceptors/response/reissueTokenInterceptor";

import { HarvestedInsightResDto } from "@/domains/insight/dtos/response/harvestedInsightResDto";

const harvestedInsightApi = async (page: number, size: number): Promise<ApiResponse<HarvestedInsightResDto>> => {
  const endpoint: string = `insight/harvested?page=${page}&size=${size}`;

  const apiResponse: ApiResponse<HarvestedInsightResDto> = await fetcher<ApiResponse<HarvestedInsightResDto>>({
    config: {
      url: buildApiServerUrl(endpoint),
      options: {
        method: "GET",
      },
    },
    requestInterceptors: [withAccessTokenInterceptor],
    responseInterceptors: [reissueTokenInterceptor],
  });

  return apiResponse;
};

export default harvestedInsightApi;
