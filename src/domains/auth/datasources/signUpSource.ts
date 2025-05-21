import { buildApiServerUrl } from "@/lib/utils/url";
import { CONTENT_TYPE_JSON } from "@/lib/apis/constants/contentType";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { SignUpReqDto } from "@/domains/auth/dtos/request/signUpReqDto";
import { SignUpResDto } from "@/domains/auth/dtos/response/signUpResDto";

const signUpSource = async (body: SignUpReqDto): Promise<ApiResponse<SignUpResDto>> => {
  const endpoint: string = "/auth/sign-up";

  const apiResponse: ApiResponse<SignUpResDto> = await externalFetcher<ApiResponse<SignUpResDto>>({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "POST",
      headers: {
        "Content-type": CONTENT_TYPE_JSON,
      },
      body: JSON.stringify(body),
    },
    errorMessage: {
      403: "이미 등록된 계정이 있어요.",
    },
  });

  return apiResponse;
};

export default signUpSource;
