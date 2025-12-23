import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { ApiErrorCode } from '@/shared/errors/api-error-code';
import BadRequestError from '@/shared/errors/api/bad-request-error';

const key = 'csfarm:refresh-token';

export const getRefreshTokenFromCookie = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(key);

  return token?.value ?? null;
};

export const getRefreshTokenFromCookieOrThrow = async (): Promise<string> => {
  const refreshToken = await getRefreshTokenFromCookie();
  if (!refreshToken) throw new BadRequestError(ApiErrorCode.E40101001);

  return refreshToken;
};

export const setRefreshTokenToCookie = (response: NextResponse, token: string): void => {
  response.cookies.set({
    name: key,
    value: token,
    path: '/api',
    maxAge: 604800,
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });
};

export const deleteRefreshTokenFromCookie = (response: NextResponse): void => {
  response.cookies.set({
    name: key,
    value: '',
    path: '/api',
    maxAge: 0,
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });
};
