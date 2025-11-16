import { NextRequest, NextResponse } from 'next/server';

import { createBffErrorResponse } from '@/lib/bff/response';
import { setAccessTokenToCookie } from '@/lib/cookie/accessToken';
import { setRefreshTokenToCookie } from '@/lib/cookie/refreshToken';
import { success, type Result } from '@/lib/types/result';

import signUpDatasource from '@/features/auth/datasources/signUpDatasource';
import { type SignUpRequest } from '@/features/auth/models/request/signUpRequest';

export const POST = async (request: NextRequest): Promise<NextResponse<Result<null>>> => {
  try {
    const requestBody = (await request.json()) as SignUpRequest;

    const signUpResponse = await signUpDatasource(requestBody);

    const token = signUpResponse.token;
    const { accessToken, refreshToken } = token;

    const response = NextResponse.json(success(null));

    setAccessTokenToCookie(response, accessToken);
    setRefreshTokenToCookie(response, refreshToken);

    return response;
  } catch (e) {
    return createBffErrorResponse(e);
  }
};
