import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";
import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import { SignInReqDto } from "@/domains/auth/dtos/request/signInReqDto";
import {
  SignInResDto,
  signInResDtoSchema,
} from "@/domains/auth/dtos/response/signInResDto";

const fetchSignIn = async (body: SignInReqDto): Promise<SignInResDto> => {
  const endpoint: string = "auth/sign-in";
  const apiResponse: ApiResponse<SignInResDto> = await apiClient<
    ApiResponse<SignInResDto>
  >({
    url: getServerApiUrl(endpoint),
    options: {
      method: "POST",
      body: JSON.stringify(body),
    },
  });

  const data: SignInResDto = apiResponse.data;
  const validatedData: SignInResDto = validateOrThrow(signInResDtoSchema, data);

  return validatedData;
};

export default fetchSignIn;
