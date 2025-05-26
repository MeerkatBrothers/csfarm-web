import { buildApiServerUrl } from "@/lib/utils/url";
import { CONTENT_TYPE_JSON } from "@/lib/apis/constants/contentType";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { SignInReqDto } from "@/domains/auth/dtos/request/signInReqDto";
import { SignInResDto } from "@/domains/auth/dtos/response/signInResDto";

const signInSource = async (body: SignInReqDto): Promise<ApiResponse<SignInResDto>> => {
  const endpoint: string = "auth/sign-in";

  const apiResponse: ApiResponse<SignInResDto> = await externalFetcher<ApiResponse<SignInResDto>>({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "POST",
      headers: {
        "Content-type": CONTENT_TYPE_JSON,
      },
      body: JSON.stringify(body),
    },
  });

  return apiResponse;
};

export default signInSource;
