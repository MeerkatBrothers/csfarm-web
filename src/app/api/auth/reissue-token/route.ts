import { NextResponse } from 'next/server';

import { setAccessTokenToCookie } from '@/shared/cookie/access-token';
import { setRefreshTokenToCookie, getRefreshTokenFromCookie } from '@/shared/cookie/refresh-token';
import { ClientErrorCode } from '@/shared/errors/client-error-code';
import UnauthorizedError from '@/shared/errors/api/unauthorized-error';
import { success, failed, type Result } from '@/shared/types/result';

import fetchReissueToken from '@/features/auth/api/server/fetch-reissue-token';

export const POST = async (): Promise<NextResponse<Result<null>>> => {
  try {
    const storedRefreshToken = await getRefreshTokenFromCookie();
    if (!storedRefreshToken) throw new UnauthorizedError(ClientErrorCode.TOKEN_NOT_FOUND);

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
