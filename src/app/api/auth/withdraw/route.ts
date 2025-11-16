import { NextResponse } from 'next/server';

import { createBffErrorResponse } from '@/lib/bff/response';
import { deleteAccessTokenFromCookie, getAccessTokenFromCookie } from '@/lib/cookie/accessToken';
import { deleteRefreshTokenFromCookie } from '@/lib/cookie/refreshToken';
import UnauthorizedError from '@/lib/errors/http/unauthorizedError';
import { success, type Result } from '@/lib/types/result';

import withdrawDatasource from '@/features/auth/datasources/withdrawDatasource';

export const DELETE = async (): Promise<NextResponse<Result<null>>> => {
  try {
    const storedAccessToken = await getAccessTokenFromCookie();
    if (!storedAccessToken) {
      throw new UnauthorizedError();
    }

    await withdrawDatasource(storedAccessToken);

    const response = NextResponse.json(success(null));

    deleteAccessTokenFromCookie(response);
    deleteRefreshTokenFromCookie(response);

    return response;
  } catch (e) {
    return createBffErrorResponse(e);
  }
};
