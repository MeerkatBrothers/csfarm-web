import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { ReissueTokenResDto } from "@/domains/auth/dtos/response/reissueTokenResDto";

const reissueTokenSource = async (refreshToken: string): Promise<ApiResponse<ReissueTokenResDto>> => {
  const endpoint: string = "auth/reissue-token";

  const apiResponse: ApiResponse<ReissueTokenResDto> = await externalFetcher<ApiResponse<ReissueTokenResDto>>({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    },
    errorMessage: {
      401: "인증이 만료되었어요. 다시 로그인 해주세요.",
    },
  });

  return apiResponse;
};

export default reissueTokenSource;
