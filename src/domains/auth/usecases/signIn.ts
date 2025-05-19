"use server";

import { Result, success, failed } from "@/lib/types/result";
import { setAccessTokenToCookie } from "@/lib/cookie/accessToken";
import { setRefreshTokenToCookie } from "@/lib/cookie/refreshToken";

import fetchSignIn from "@/domains/auth/repositories/fetchSignIn";
import { CredentialForm } from "@/domains/auth/models/form/credential";
import Token from "@/domains/auth/models/token";

const signIn = async (credentialForm: CredentialForm): Promise<Result<null>> => {
  try {
    const token: Token = await fetchSignIn(credentialForm);

    const { accessToken, refreshToken } = token;

    await Promise.all([setAccessTokenToCookie(accessToken), setRefreshTokenToCookie(refreshToken)]);

    return success(null);
  } catch (e) {
    return failed(e);
  }
};

export default signIn;
