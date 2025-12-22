import { NextResponse } from 'next/server';

import {
  getAccessTokenFromCookie,
  deleteAccessTokenFromCookie,
} from '@/shared/cookie/access-token';
import { deleteRefreshTokenFromCookie } from '@/shared/cookie/refresh-token';
import { ClientErrorCode } from '@/shared/errors/client-error-code';
import UnauthorizedError from '@/shared/errors/api/unauthorized-error';
import { success, failed, type Result } from '@/shared/types/result';

import fetchWithdraw from '@/features/auth/api/server/fetch-withdraw';

export const DELETE = async (): Promise<NextResponse<Result<null>>> => {
  try {
    const storedAccessToken = await getAccessTokenFromCookie();
    if (!storedAccessToken) throw new UnauthorizedError(ClientErrorCode.TOKEN_NOT_FOUND);

    await fetchWithdraw(storedAccessToken);

    const response = NextResponse.json(success(null), { status: 200 });

    deleteAccessTokenFromCookie(response);
    deleteRefreshTokenFromCookie(response);

    return response;
  } catch (e) {
    const result = failed(e);

    return NextResponse.json(result, { status: result.statusCode });
  }
};
