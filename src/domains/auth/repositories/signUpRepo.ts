import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import signUpSource from "@/domains/auth/datasources/signUpSource";
import { mapCredentialFormToDto } from "@/domains/auth/mappers/fragments/credentialFormMapper";
import { mapTokenDtoToModel } from "@/domains/auth/mappers/fragments/tokenMapper";
import { CredentialForm } from "@/domains/auth/models/fragments/credentialForm";
import { Token } from "@/domains/auth/models/fragments/token";
import { SignUpReqDto, signUpReqDtoSchema } from "@/domains/auth/dtos/request/signUpReqDto";
import { SignUpResDto, signUpResDtoSchema } from "@/domains/auth/dtos/response/signUpResDto";
import { CredentialFormDto } from "@/domains/auth/dtos/fragments/credentialFormDto";
import { TokenDto } from "@/domains/auth/dtos/fragments/tokenDto";

const signUpRepo = async (credentialForm: CredentialForm): Promise<Token> => {
  const credentialFormDto: CredentialFormDto = mapCredentialFormToDto(credentialForm);
  const requestBody: SignUpReqDto = { credential: credentialFormDto };

  const validatedBody: SignUpReqDto = validateOrThrow(signUpReqDtoSchema, requestBody);

  const apiResponse: ApiResponse<SignUpResDto> = await signUpSource(validatedBody);
  const data: SignUpResDto = apiResponse.data;

  const validatedData: SignUpResDto = validateOrThrow(signUpResDtoSchema, data);

  const tokenDto: TokenDto = validatedData.token;
  const token: Token = mapTokenDtoToModel(tokenDto);

  return token;
};

export default signUpRepo;
