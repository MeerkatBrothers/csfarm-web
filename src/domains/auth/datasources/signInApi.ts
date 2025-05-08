import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";
import ApiResponse from "@/lib/models/apiResponse";

import { SignInReqDto } from "@/domains/auth/dtos/request/signInReqDto";
import { SignInResDto } from "@/domains/auth/dtos/response/signInResDto";

const signInApi = async (body: SignInReqDto): Promise<ApiResponse<SignInResDto>> => {
  const endpoint: string = "auth/sign-in";

  const apiResponse: ApiResponse<SignInResDto> = await apiClient<ApiResponse<SignInResDto>>({
    url: getServerApiUrl(endpoint),
    options: {
      method: "POST",
      body: JSON.stringify(body),
    },
  });

  return apiResponse;
};

export default signInApi;
