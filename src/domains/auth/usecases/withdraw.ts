"use server";

import {
  deleteAccessTokenFromCookie,
  getAccessTokenFromCookie,
} from "@/lib/cookie/accessToken";
import { deleteRefreshTokenFromCookie } from "@/lib/cookie/refreshToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import fetchWithdraw from "@/domains/auth/apis/fetchWithdraw";

const withdraw = async (): Promise<void> => {
  const storedAccessToken: string | null = await getAccessTokenFromCookie();
  if (!storedAccessToken) {
    throw new UnauthorizedError();
  }

  await fetchWithdraw(storedAccessToken);
  await Promise.all([
    deleteAccessTokenFromCookie(),
    deleteRefreshTokenFromCookie(),
  ]);
};

export default withdraw;
