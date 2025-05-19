"use server";

import { Result, success, failed } from "@/lib/types/result";
import { deleteAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import { deleteRefreshTokenFromCookie } from "@/lib/cookie/refreshToken";

import fetchSignOut from "@/domains/auth/repositories/fetchSignOut";

const signOut = async (): Promise<Result<null>> => {
  try {
    await Promise.all([deleteAccessTokenFromCookie(), deleteRefreshTokenFromCookie()]);

    await fetchSignOut();

    return success(null);
  } catch (e) {
    return failed(e);
  }
};

export default signOut;
