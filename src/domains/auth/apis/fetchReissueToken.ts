import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";
import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import {
  ReissueTokenResDto,
  reissueTokenResDtoSchema,
} from "@/domains/auth/dtos/response/reissueTokenResDto";

const fetchReissueToken = async (
  refreshToken: string
): Promise<ReissueTokenResDto> => {
  const endpoint: string = "auth/reissue-token";

  const apiResponse: ApiResponse<ReissueTokenResDto> = await apiClient({
    url: getServerApiUrl(endpoint),
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    },
  });

  const data: ReissueTokenResDto = apiResponse.data;
  const validatedData: ReissueTokenResDto = validateOrThrow(
    reissueTokenResDtoSchema,
    data
  );

  return validatedData;
};

export default fetchReissueToken;
