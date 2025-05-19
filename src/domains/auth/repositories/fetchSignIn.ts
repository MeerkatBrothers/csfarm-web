import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import signInApi from "@/domains/auth/datasources/signInApi";
import { mapCredentialFormToDto } from "@/domains/auth/mappers/fragments/credentialFormMapper";
import { mapTokenDtoToModel } from "@/domains/auth/mappers/fragments/tokenMapper";
import { CredentialForm } from "@/domains/auth/models/fragments/credentialForm";
import { Token } from "@/domains/auth/models/fragments/token";
import { SignInReqDto, signInReqDtoSchema } from "@/domains/auth/dtos/request/signInReqDto";
import { SignInResDto, signInResDtoSchema } from "@/domains/auth/dtos/response/signInResDto";
import { CredentialFormDto } from "@/domains/auth/dtos/fragments/credentialFormDto";
import { TokenDto } from "@/domains/auth/dtos/fragments/tokenDto";

const fetchSignIn = async (credentialForm: CredentialForm): Promise<Token> => {
  const credentialFormDto: CredentialFormDto = mapCredentialFormToDto(credentialForm);
  const requestBody: SignInReqDto = { credential: credentialFormDto };

  const validatedBody: SignInReqDto = validateOrThrow(signInReqDtoSchema, requestBody);

  const apiResponse: ApiResponse<SignInResDto> = await signInApi(validatedBody);
  const data: SignInResDto = apiResponse.data;

  const validatedData: SignInResDto = validateOrThrow(signInResDtoSchema, data);

  const tokenDto: TokenDto = validatedData.token;
  const token: Token = mapTokenDtoToModel(tokenDto);

  return token;
};

export default fetchSignIn;
