import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import signUpApi from "@/domains/auth/datasources/signUpApi";
import { mapCredentialFormToDto } from "@/domains/auth/mappers/credentialMapper";
import { mapTokenDtoToModel } from "@/domains/auth/mappers/tokenMapper";
import { CredentialForm } from "@/domains/auth/models/form/credential";
import Token from "@/domains/auth/models/token";
import { SignUpReqDto, signUpReqDtoSchema } from "@/domains/auth/dtos/request/signUpReqDto";
import { SignUpResDto, signUpResDtoSchema } from "@/domains/auth/dtos/response/signUpResDto";
import { CredentialDto } from "@/domains/auth/dtos/credentialDto";
import { TokenDto } from "@/domains/auth/dtos/tokenDto";

const fetchSignUp = async (credentialForm: CredentialForm): Promise<Token> => {
  const credentialDto: CredentialDto = mapCredentialFormToDto(credentialForm);
  const requestBody: SignUpReqDto = { credential: credentialDto };

  const validatedBody: SignUpReqDto = validateOrThrow(signUpReqDtoSchema, requestBody);

  const apiResponse: ApiResponse<SignUpResDto> = await signUpApi(validatedBody);

  const data: SignUpResDto = apiResponse.data;

  const validatedData: SignUpResDto = validateOrThrow(signUpResDtoSchema, data);

  const tokenDto: TokenDto = validatedData.token;
  const token: Token = mapTokenDtoToModel(tokenDto);

  return token;
};

export default fetchSignUp;
