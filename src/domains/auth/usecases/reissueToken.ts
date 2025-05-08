"use server";

import { setAccessTokenToCookie } from "@/lib/cookie/accessToken";
import {
  setRefreshTokenToCookie,
  getRefreshTokenFromCookie,
} from "@/lib/cookie/refreshToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import fetchReissueToken from "@/domains/auth/apis/fetchReissueToken";
import { mapTokenDtoToModel } from "@/domains/auth/mappers/tokenMapper";
import Token from "@/domains/auth/models/token";
import { ReissueTokenResDto } from "@/domains/auth/dtos/response/reissueTokenResDto";

const reissueToken = async (): Promise<void> => {
  const storedRefreshToken: string | null = await getRefreshTokenFromCookie();
  if (!storedRefreshToken) {
    throw new UnauthorizedError();
  }

  const responseData: ReissueTokenResDto = await fetchReissueToken(
    storedRefreshToken
  );
  const { token: tokenDto } = responseData;

  const token: Token = mapTokenDtoToModel(tokenDto);
  const { accessToken, refreshToken } = token;

  await Promise.all([
    setAccessTokenToCookie(accessToken),
    setRefreshTokenToCookie(refreshToken),
  ]);
};

export default reissueToken;
