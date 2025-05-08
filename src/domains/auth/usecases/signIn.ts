"use server";

import { setAccessTokenToCookie } from "@/lib/cookie/accessToken";
import { setRefreshTokenToCookie } from "@/lib/cookie/refreshToken";

import fetchSignIn from "@/domains/auth/apis/fetchSignIn";
import { mapCredentialFormToDto } from "@/domains/auth/mappers/credentialMapper";
import { mapTokenDtoToModel } from "@/domains/auth/mappers/tokenMapper";
import { CredentialForm } from "@/domains/auth/models/form/credential";
import Token from "@/domains/auth/models/token";
import { SignInReqDto } from "@/domains/auth/dtos/request/signInReqDto";
import { SignInResDto } from "@/domains/auth/dtos/response/signInResDto";
import { CredentialDto } from "@/domains/auth/dtos/credentialDto";

const signIn = async (credentialForm: CredentialForm): Promise<void> => {
  const credentialDto: CredentialDto = mapCredentialFormToDto(credentialForm);
  const requestBody: SignInReqDto = { credential: credentialDto };

  const responseData: SignInResDto = await fetchSignIn(requestBody);
  const { token: tokenDto } = responseData;

  const token: Token = mapTokenDtoToModel(tokenDto);
  const { accessToken, refreshToken } = token;

  await Promise.all([
    setAccessTokenToCookie(accessToken),
    setRefreshTokenToCookie(refreshToken),
  ]);
};

export default signIn;
