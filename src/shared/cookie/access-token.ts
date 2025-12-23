import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { ApiErrorCode } from '@/shared/errors/api-error-code';
import UnauthorizedError from '@/shared/errors/api/unauthorized-error';

const key = 'csfarm:access-token';

export const getAccessTokenFromCookie = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(key);

  return token?.value ?? null;
};

export const getAccessTokenFromCookieOrThrow = async (): Promise<string> => {
  const accessToken = await getAccessTokenFromCookie();
  if (!accessToken) throw new UnauthorizedError(ApiErrorCode.E40101001);

  return accessToken;
};

export const setAccessTokenToCookie = (response: NextResponse, token: string): void => {
  response.cookies.set({
    name: key,
    value: token,
    path: '/api',
    maxAge: 1800,
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });
};

export const deleteAccessTokenFromCookie = (response: NextResponse): void => {
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
