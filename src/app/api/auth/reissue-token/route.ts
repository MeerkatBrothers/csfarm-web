import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import { setAccessTokenToCookie } from "@/lib/cookie/accessToken";
import { getRefreshTokenFromCookie, setRefreshTokenToCookie } from "@/lib/cookie/refreshToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import reissueTokenRepo from "@/domains/auth/repositories/reissueTokenRepo";
import { Token, tokenSchema } from "@/domains/auth/models/fragments/token";

export const POST = async (): Promise<NextResponse<Result<Token>>> => {
  try {
    const storedRefreshToken: string | null = await getRefreshTokenFromCookie();
    if (!storedRefreshToken) {
      throw new UnauthorizedError();
    }

    const token: Token = await reissueTokenRepo(storedRefreshToken);

    const validatedToken: Token = validateOrThrow(tokenSchema, token);
    const { accessToken, refreshToken } = validatedToken;

    const response: NextResponse<Result<Token>> = NextResponse.json(success(validatedToken));

    setAccessTokenToCookie(response, accessToken);
    setRefreshTokenToCookie(response, refreshToken);

    return response;
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
