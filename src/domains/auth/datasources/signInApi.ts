import { CONTENT_TYPE_JSON } from "@/lib/apis/constants/contentType";
import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { SignInReqDto } from "@/domains/auth/dtos/request/signInReqDto";
import { SignInResDto } from "@/domains/auth/dtos/response/signInResDto";

const signInApi = async (body: SignInReqDto): Promise<ApiResponse<SignInResDto>> => {
  const endpoint: string = "auth/sign-in";

  const apiResponse: ApiResponse<SignInResDto> = await fetcher<ApiResponse<SignInResDto>>({
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
  });

  return apiResponse;
};

export default signInApi;
