import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import withRefreshTokenInterceptor from "@/lib/apis/interceptors/request/withRefreshTokenInterceptor";
import ApiResponse from "@/lib/models/apiResponse";

import { ReissueTokenResDto } from "@/domains/auth/dtos/response/reissueTokenResDto";

const reissueTokenApi = async (): Promise<ApiResponse<ReissueTokenResDto>> => {
  const endpoint: string = "auth/reissue-token";

  const apiResponse: ApiResponse<ReissueTokenResDto> = await fetcher<ApiResponse<ReissueTokenResDto>>({
    config: {
      url: buildApiServerUrl(endpoint),
      options: {
        method: "POST",
      },
    },
    requestInterceptors: [withRefreshTokenInterceptor],
    errorMessage: {
      401: "인증이 만료되었어요. 다시 로그인 해주세요.",
    },
  });

  return apiResponse;
};

export default reissueTokenApi;
