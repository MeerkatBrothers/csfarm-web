"use server";

import { setAccessTokenToCookie } from "@/lib/cookie/accessToken";
import { setRefreshTokenToCookie } from "@/lib/cookie/refreshToken";

import fetchSignIn from "@/domains/auth/repositories/fetchSignIn";
import { CredentialForm } from "@/domains/auth/models/form/credential";
import Token from "@/domains/auth/models/token";

const signIn = async (credentialForm: CredentialForm): Promise<void> => {
  const fetchedData: Token = await fetchSignIn(credentialForm);

  const { accessToken, refreshToken } = fetchedData;

  await Promise.all([setAccessTokenToCookie(accessToken), setRefreshTokenToCookie(refreshToken)]);
};

export default signIn;
