import { buildApiServerUrl } from "@/lib/utils/url";
import { CONTENT_TYPE_JSON } from "@/lib/apis/constants/contentType";
import fetcher from "@/lib/apis/fetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { SignUpReqDto } from "@/domains/auth/dtos/request/signUpReqDto";
import { SignUpResDto } from "@/domains/auth/dtos/response/signUpResDto";

const signUpApi = async (body: SignUpReqDto): Promise<ApiResponse<SignUpResDto>> => {
  const endpoint: string = "auth/sign-up";

  const apiResponse: ApiResponse<SignUpResDto> = await fetcher<ApiResponse<SignUpResDto>>({
    config: {
      url: buildApiServerUrl(endpoint),
      options: {
        method: "POST",
        headers: {
          "Content-type": CONTENT_TYPE_JSON,
        },
        body: JSON.stringify(body),
      },
    },
    errorMessage: {
      403: "이미 등록된 계정이 있어요.",
    },
  });

  return apiResponse;
};

export default signUpApi;
