"use server";

import { deleteAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import { deleteRefreshTokenFromCookie } from "@/lib/cookie/refreshToken";

import fetchWithdraw from "@/domains/auth/repositories/fetchWithdraw";

const withdraw = async (): Promise<void> => {
  await fetchWithdraw();

  await Promise.all([deleteAccessTokenFromCookie(), deleteRefreshTokenFromCookie()]);
};

export default withdraw;
