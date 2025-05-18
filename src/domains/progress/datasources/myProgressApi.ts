import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import withAccessTokenInterceptor from "@/lib/apis/interceptors/request/withAccessTokenInterceptor";
import reissueTokenInterceptor from "@/lib/apis/interceptors/response/reissueTokenInterceptor";
import ApiResponse from "@/lib/models/apiResponse";

import { MyProgressResDto } from "@/domains/progress/dtos/request/myProgressResDto";

const myProgressApi = async (): Promise<ApiResponse<MyProgressResDto>> => {
  const endpoint: string = "progress/my";

  const apiResponse: ApiResponse<MyProgressResDto> = await fetcher<ApiResponse<MyProgressResDto>>({
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

export default myProgressApi;
