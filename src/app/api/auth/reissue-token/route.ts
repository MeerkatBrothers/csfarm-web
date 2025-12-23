import { NextResponse } from 'next/server';

import { setAccessTokenToCookie } from '@/shared/cookie/access-token';
import {
  getRefreshTokenFromCookieOrThrow,
  setRefreshTokenToCookie,
} from '@/shared/cookie/refresh-token';
import { success, failed, type Result } from '@/shared/types/result';

import fetchReissueToken from '@/features/auth/api/server/fetch-reissue-token';

export const POST = async (): Promise<NextResponse<Result<null>>> => {
  try {
    const storedRefreshToken = await getRefreshTokenFromCookieOrThrow();

    const token = await fetchReissueToken(storedRefreshToken);
    const { accessToken, refreshToken } = token;

    const response = NextResponse.json(success(null), { status: 200 });

    setAccessTokenToCookie(response, accessToken);
    setRefreshTokenToCookie(response, refreshToken);

    return response;
  } catch (e) {
    const result = failed(e);

    return NextResponse.json(result, { status: result.statusCode });
  }
};
