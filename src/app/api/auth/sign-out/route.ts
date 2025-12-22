import { NextResponse } from 'next/server';

import { deleteAccessTokenFromCookie } from '@/shared/cookie/access-token';
import {
  getRefreshTokenFromCookie,
  deleteRefreshTokenFromCookie,
} from '@/shared/cookie/refresh-token';
import { success, failed, type Result } from '@/shared/types/result';

import fetchSignOut from '@/features/auth/api/server/fetch-sign-out';

export const DELETE = async (): Promise<NextResponse<Result<null>>> => {
  try {
    const storedRefreshToken = await getRefreshTokenFromCookie();
    if (storedRefreshToken) await fetchSignOut(storedRefreshToken);

    const response = NextResponse.json(success(null), { status: 200 });

    deleteAccessTokenFromCookie(response);
    deleteRefreshTokenFromCookie(response);

    return response;
  } catch (e) {
    const result = failed(e);

    return NextResponse.json(result, { status: result.statusCode });
  }
};
