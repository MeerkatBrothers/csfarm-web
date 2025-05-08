"use server";

import { setAccessTokenToCookie } from "@/lib/cookie/accessToken";
import {
  setRefreshTokenToCookie,
  getRefreshTokenFromCookie,
} from "@/lib/cookie/refreshToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import fetchReissueToken from "@/domains/auth/repositories/fetchReissueToken";
import Token from "@/domains/auth/models/token";

const reissueToken = async (): Promise<void> => {
  const storedRefreshToken: string | null = await getRefreshTokenFromCookie();
  if (!storedRefreshToken) {
    throw new UnauthorizedError();
  }

  const fetchedData: Token = await fetchReissueToken(storedRefreshToken);

  const { accessToken, refreshToken } = fetchedData;

  await Promise.all([
    setAccessTokenToCookie(accessToken),
    setRefreshTokenToCookie(refreshToken),
  ]);
};

export default reissueToken;
