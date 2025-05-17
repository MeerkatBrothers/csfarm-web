import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import withAccessTokenInterceptor from "@/lib/apis/interceptors/request/withAccessTokenInterceptor";
import reissueTokenInterceptor from "@/lib/apis/interceptors/response/reissueTokenInterceptor";
import ApiResponse from "@/lib/models/apiResponse";

import { MyProfileResDto } from "@/domains/profile/dtos/response/myProfileResDto";

const myProfileApi = async (): Promise<ApiResponse<MyProfileResDto>> => {
  const endpoint: string = "profile/my";

  const apiResponse: ApiResponse<MyProfileResDto> = await fetcher<ApiResponse<MyProfileResDto>>({
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

export default myProfileApi;
