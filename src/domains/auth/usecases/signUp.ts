"use server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import { setAccessTokenToCookie } from "@/lib/cookie/accessToken";
import { setRefreshTokenToCookie } from "@/lib/cookie/refreshToken";

import fetchSignUp from "@/domains/auth/repositories/fetchSignUp";
import { CredentialForm, credentialFormSchema } from "@/domains/auth/models/fragments/credentialForm";
import { Token, tokenSchema } from "@/domains/auth/models/fragments/token";

const signUp = async (credentialForm: CredentialForm): Promise<Result<null>> => {
  try {
    const validatedCredentialForm: CredentialForm = validateOrThrow(credentialFormSchema, credentialForm);

    const token: Token = await fetchSignUp(validatedCredentialForm);

    const validatedToken: Token = validateOrThrow(tokenSchema, token);
    const { accessToken, refreshToken } = validatedToken;

    await Promise.all([setAccessTokenToCookie(accessToken), setRefreshTokenToCookie(refreshToken)]);

    return success(null);
  } catch (e) {
    return failed(e);
  }
};

export default signUp;
