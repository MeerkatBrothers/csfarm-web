import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { getAccessTokenFromCookie, deleteAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import { deleteRefreshTokenFromCookie } from "@/lib/cookie/refreshToken";

import signOutSource from "@/domains/auth/datasources/signOutSource";

export const DELETE = async (): Promise<NextResponse<Result<null>>> => {
  try {
    const storedAccessToken: string | null = await getAccessTokenFromCookie();
    if (storedAccessToken) {
      await signOutSource(storedAccessToken);
    }

    const response: NextResponse<Result<null>> = NextResponse.json(success(null));

    deleteAccessTokenFromCookie(response);
    deleteRefreshTokenFromCookie(response);

    return response;
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
