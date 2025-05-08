import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";
import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import {
  SignUpReqDto,
  signUpReqDtoSchema,
} from "@/domains/auth/dtos/request/signUpReqDto";
import {
  SignUpResDto,
  signUpResDtoSchema,
} from "@/domains/auth/dtos/response/signUpResDto";

const fetchSignUp = async (body: SignUpReqDto): Promise<SignUpResDto> => {
  const endpoint: string = "auth/sign-up";
  const validatedBody: SignUpReqDto = validateOrThrow(signUpReqDtoSchema, body);

  const apiResponse: ApiResponse<SignUpResDto> = await apiClient<
    ApiResponse<SignUpResDto>
  >({
    url: getServerApiUrl(endpoint),
    options: {
      method: "POST",
      body: JSON.stringify(validatedBody),
    },
  });

  const data: SignUpResDto = apiResponse.data;
  const validatedData: SignUpResDto = validateOrThrow(signUpResDtoSchema, data);

  return validatedData;
};

export default fetchSignUp;
