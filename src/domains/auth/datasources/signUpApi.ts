import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";
import ApiResponse from "@/lib/models/apiResponse";

import { SignUpReqDto } from "@/domains/auth/dtos/request/signUpReqDto";
import { SignUpResDto } from "@/domains/auth/dtos/response/signUpResDto";

const signUpApi = async (
  body: SignUpReqDto
): Promise<ApiResponse<SignUpResDto>> => {
  const endpoint: string = "auth/sign-up";

  const apiResponse: ApiResponse<SignUpResDto> = await apiClient<
    ApiResponse<SignUpResDto>
  >({
    url: getServerApiUrl(endpoint),
    options: {
      method: "POST",
      body: JSON.stringify(body),
    },
  });

  return apiResponse;
};

export default signUpApi;
