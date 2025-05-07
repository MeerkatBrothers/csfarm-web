import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";
import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import { SignUpReqDto } from "@/domains/auth/dtos/request/signUpReqDto";
import {
  SignUpResDto,
  signUpResDtoSchema,
} from "@/domains/auth/dtos/response/signUpResDto";

const fetchSignUp = async (body: SignUpReqDto): Promise<SignUpResDto> => {
  const endpoint: string = "auth/sign-up";
  const apiResponse: ApiResponse<SignUpResDto> = await apiClient({
    url: getServerApiUrl(endpoint),
    options: {
      method: "POST",
      body: JSON.stringify(body),
    },
  });

  const data: SignUpResDto = apiResponse.data;
  const validatedData: SignUpResDto = validateOrThrow(signUpResDtoSchema, data);

  return validatedData;
};

export default fetchSignUp;
