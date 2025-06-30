import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { AUTH_EXPIRED_ERROR } from "@/domains/auth/constants/errorMessage";
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
      401: AUTH_EXPIRED_ERROR,
    },
  });

  return apiResponse;
};

export default reissueTokenSource;
