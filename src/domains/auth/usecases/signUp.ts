"use server";

import { setAccessTokenToCookie } from "@/lib/cookie/accessToken";
import { setRefreshTokenToCookie } from "@/lib/cookie/refreshToken";

import fetchSignUp from "@/domains/auth/repositories/fetchSignUp";
import { CredentialForm } from "@/domains/auth/models/form/credential";
import Token from "@/domains/auth/models/token";

const signUp = async (credentialForm: CredentialForm): Promise<void> => {
  const token: Token = await fetchSignUp(credentialForm);

  const { accessToken, refreshToken } = token;

  await Promise.all([setAccessTokenToCookie(accessToken), setRefreshTokenToCookie(refreshToken)]);
};

export default signUp;
