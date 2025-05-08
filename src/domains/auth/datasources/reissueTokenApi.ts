import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";
import ApiResponse from "@/lib/models/apiResponse";

import { ReissueTokenResDto } from "@/domains/auth/dtos/response/reissueTokenResDto";

const reissueTokenApi = async (refreshToken: string): Promise<ApiResponse<ReissueTokenResDto>> => {
  const endpoint: string = "auth/reissue-token";

  const apiResponse: ApiResponse<ReissueTokenResDto> = await apiClient<ApiResponse<ReissueTokenResDto>>({
    url: getServerApiUrl(endpoint),
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    },
  });

  return apiResponse;
};

export default reissueTokenApi;
