"use server";

import {
  deleteAccessTokenFromCookie,
  getAccessTokenFromCookie,
} from "@/lib/cookie/accessToken";
import { deleteRefreshTokenFromCookie } from "@/lib/cookie/refreshToken";

import fetchSignOut from "@/domains/auth/repositories/fetchSignOut";

const signOut = async (): Promise<void> => {
  const storedAccessToken: string | null = await getAccessTokenFromCookie();
  if (storedAccessToken) {
    await Promise.all([
      deleteAccessTokenFromCookie(),
      deleteRefreshTokenFromCookie(),
    ]);

    await fetchSignOut(storedAccessToken);
  }
};

export default signOut;
