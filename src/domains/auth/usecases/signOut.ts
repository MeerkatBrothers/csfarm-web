"use server";

import { deleteAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import { deleteRefreshTokenFromCookie } from "@/lib/cookie/refreshToken";

import fetchSignOut from "@/domains/auth/repositories/fetchSignOut";

const signOut = async (): Promise<void> => {
  await Promise.all([deleteAccessTokenFromCookie(), deleteRefreshTokenFromCookie()]);

  await fetchSignOut();
};

export default signOut;
