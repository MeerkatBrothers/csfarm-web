import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { getAccessTokenFromCookie, deleteAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import { deleteRefreshTokenFromCookie } from "@/lib/cookie/refreshToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import withdrawSource from "@/domains/auth/datasources/withdrawSource";

export const DELETE = async (): Promise<NextResponse<Result<null>>> => {
  try {
    const storedAccessToken: string | null = await getAccessTokenFromCookie();
    if (!storedAccessToken) {
      throw new UnauthorizedError();
    }

    await withdrawSource(storedAccessToken);

    const response: NextResponse<Result<null>> = NextResponse.json(success(null));

    deleteAccessTokenFromCookie(response);
    deleteRefreshTokenFromCookie(response);

    return response;
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
