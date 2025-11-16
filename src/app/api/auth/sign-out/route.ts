import { NextResponse } from 'next/server';

import { createBffErrorResponse } from '@/lib/bff/response';
import { deleteAccessTokenFromCookie } from '@/lib/cookie/accessToken';
import { deleteRefreshTokenFromCookie, getRefreshTokenFromCookie } from '@/lib/cookie/refreshToken';
import { success, type Result } from '@/lib/types/result';

import signOutDatasource from '@/features/auth/datasources/signOutDatasource';

export const DELETE = async (): Promise<NextResponse<Result<null>>> => {
  try {
    const storedRefreshToken = await getRefreshTokenFromCookie();
    if (storedRefreshToken) {
      await signOutDatasource(storedRefreshToken);
    }

    const response = NextResponse.json(success(null));

    deleteAccessTokenFromCookie(response);
    deleteRefreshTokenFromCookie(response);

    return response;
  } catch (e) {
    return createBffErrorResponse(e);
  }
};
