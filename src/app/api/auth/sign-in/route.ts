import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import { setAccessTokenToCookie } from "@/lib/cookie/accessToken";
import { setRefreshTokenToCookie } from "@/lib/cookie/refreshToken";

import signInRepo from "@/domains/auth/repositories/signInRepo";
import { CredentialForm, credentialFormSchema } from "@/domains/auth/models/fragments/credentialForm";
import { Token, tokenSchema } from "@/domains/auth/models/fragments/token";

export const POST = async (request: Request): Promise<NextResponse<Result<null>>> => {
  try {
    const requestBody: unknown = await request.json();
    const validatedCredentialForm: CredentialForm = validateOrThrow(credentialFormSchema, requestBody);

    const token: Token = await signInRepo(validatedCredentialForm);

    const validatedToken: Token = validateOrThrow(tokenSchema, token);
    const { accessToken, refreshToken } = validatedToken;

    const response: NextResponse<Result<null>> = NextResponse.json(success(null));

    setAccessTokenToCookie(response, accessToken);
    setRefreshTokenToCookie(response, refreshToken);

    return response;
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
