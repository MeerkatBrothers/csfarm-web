"use server";

import { setAccessTokenToCookie } from "@/lib/cookie/accessToken";
import { setRefreshTokenToCookie } from "@/lib/cookie/refreshToken";

import fetchSignUp from "@/domains/auth/apis/fetchSignUp";
import { mapCredentialFormToDto } from "@/domains/auth/mappers/credentialMapper";
import { mapTokenDtoToModel } from "@/domains/auth/mappers/tokenMapper";
import { CredentialForm } from "@/domains/auth/models/form/credential";
import Token from "@/domains/auth/models/token";
import { SignUpReqDto } from "@/domains/auth/dtos/request/signUpReqDto";
import { SignUpResDto } from "@/domains/auth/dtos/response/signUpResDto";
import { CredentialDto } from "@/domains/auth/dtos/credentialDto";

const signUp = async (credentialForm: CredentialForm): Promise<void> => {
  const credentialDto: CredentialDto = mapCredentialFormToDto(credentialForm);
  const requestBody: SignUpReqDto = { credential: credentialDto };

  const responseData: SignUpResDto = await fetchSignUp(requestBody);
  const { token: tokenDto } = responseData;

  const token: Token = mapTokenDtoToModel(tokenDto);
  const { accessToken, refreshToken } = token;

  await Promise.all([
    setAccessTokenToCookie(accessToken),
    setRefreshTokenToCookie(refreshToken),
  ]);
};

export default signUp;
