import { NextRequest, NextResponse } from 'next/server';

import { createBffErrorResponse } from '@/lib/bff/response';
import { setAccessTokenToCookie } from '@/lib/cookie/accessToken';
import { setRefreshTokenToCookie } from '@/lib/cookie/refreshToken';
import { success, type Result } from '@/lib/types/result';

import signInDatasource from '@/features/auth/datasources/signInDatasource';
import { type SignInRequest } from '@/features/auth/models/request/signInRequest';

export const POST = async (request: NextRequest): Promise<NextResponse<Result<null>>> => {
  try {
    const requestBody = (await request.json()) as SignInRequest;

    const signInResponse = await signInDatasource(requestBody);

    const token = signInResponse.token;
    const { accessToken, refreshToken } = token;

    const response = NextResponse.json(success(null));

    setAccessTokenToCookie(response, accessToken);
    setRefreshTokenToCookie(response, refreshToken);

    return response;
  } catch (e) {
    return createBffErrorResponse(e);
  }
};
