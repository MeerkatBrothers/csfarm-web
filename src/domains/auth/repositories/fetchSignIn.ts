import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import signInApi from "@/domains/auth/datasources/signInApi";
import { mapCredentialFormToDto } from "@/domains/auth/mappers/credentialMapper";
import { mapTokenDtoToModel } from "@/domains/auth/mappers/tokenMapper";
import { CredentialForm } from "@/domains/auth/models/form/credential";
import Token from "@/domains/auth/models/token";
import {
  SignInReqDto,
  signInReqDtoSchema,
} from "@/domains/auth/dtos/request/signInReqDto";
import {
  SignInResDto,
  signInResDtoSchema,
} from "@/domains/auth/dtos/response/signInResDto";
import { CredentialDto } from "@/domains/auth/dtos/credentialDto";
import { TokenDto } from "@/domains/auth/dtos/tokenDto";

const fetchSignIn = async (credentialForm: CredentialForm): Promise<Token> => {
  const credentialDto: CredentialDto = mapCredentialFormToDto(credentialForm);
  const requestBody: SignInReqDto = { credential: credentialDto };

  const validatedBody: SignInReqDto = validateOrThrow(
    signInReqDtoSchema,
    requestBody
  );

  const apiResponse: ApiResponse<SignInResDto> = await signInApi(validatedBody);

  const data: SignInResDto = apiResponse.data;

  const validatedData: SignInResDto = validateOrThrow(signInResDtoSchema, data);

  const tokenDto: TokenDto = validatedData.token;
  const token: Token = mapTokenDtoToModel(tokenDto);

  return token;
};

export default fetchSignIn;
