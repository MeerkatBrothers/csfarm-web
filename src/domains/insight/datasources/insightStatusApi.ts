import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import ApiResponse from "@/lib/models/apiResponse";
import withAccessTokenInterceptor from "@/lib/apis/interceptors/request/withAccessTokenInterceptor";
import reissueTokenInterceptor from "@/lib/apis/interceptors/response/reissueTokenInterceptor";

import { InsightStatusResDto } from "@/domains/insight/dtos/response/insightStatusResDto";

const insightStatusApi = async (insightId: number): Promise<ApiResponse<InsightStatusResDto>> => {
  const endpoint: string = `insight/status/${insightId}`;

  const apiResponse: ApiResponse<InsightStatusResDto> = await fetcher<ApiResponse<InsightStatusResDto>>({
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

export default insightStatusApi;
