import { NextResponse } from 'next/server';

import { createBffErrorResponse } from '@/lib/bff/response';
import { setAccessTokenToCookie } from '@/lib/cookie/accessToken';
import { setRefreshTokenToCookie, getRefreshTokenFromCookie } from '@/lib/cookie/refreshToken';
import UnauthorizedError from '@/lib/errors/http/unauthorizedError';
import { success, type Result } from '@/lib/types/result';

import reissueTokenDatasource from '@/features/auth/datasources/reissueTokenDatasource';

export const POST = async (): Promise<NextResponse<Result<null>>> => {
  try {
    const storedRefreshToken = await getRefreshTokenFromCookie();
    if (!storedRefreshToken) {
      throw new UnauthorizedError();
    }

    const reissueTokenResponse = await reissueTokenDatasource(storedRefreshToken);

    const token = reissueTokenResponse.token;
    const { accessToken, refreshToken } = token;

    const response = NextResponse.json(success(null));

    setAccessTokenToCookie(response, accessToken);
    setRefreshTokenToCookie(response, refreshToken);

    return response;
  } catch (e) {
    return createBffErrorResponse(e);
  }
};
