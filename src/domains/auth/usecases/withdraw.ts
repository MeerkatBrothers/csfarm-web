"use server";

import { Result, success, failed } from "@/lib/types/result";
import { deleteAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import { deleteRefreshTokenFromCookie } from "@/lib/cookie/refreshToken";

import fetchWithdraw from "@/domains/auth/repositories/fetchWithdraw";

const withdraw = async (): Promise<Result<null>> => {
  try {
    await fetchWithdraw();

    await Promise.all([deleteAccessTokenFromCookie(), deleteRefreshTokenFromCookie()]);

    return success(null);
  } catch (e) {
    return failed(e);
  }
};

export default withdraw;
