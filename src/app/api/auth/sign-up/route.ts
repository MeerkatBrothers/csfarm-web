import { NextRequest, NextResponse } from 'next/server';

import { validateOrThrow } from '@/shared/utils/zod';
import { setAccessTokenToCookie } from '@/shared/cookie/access-token';
import { setRefreshTokenToCookie } from '@/shared/cookie/refresh-token';
import { success, failed, type Result } from '@/shared/types/result';

import fetchSignUp from '@/features/auth/api/server/fetch-sign-up';
import { credentialFormSchema, type CredentialForm } from '@/features/auth/models/credential.form';

export const POST = async (request: NextRequest): Promise<NextResponse<Result<null>>> => {
  try {
    const requestBody = (await request.json()) as CredentialForm;
    const validatedBody = validateOrThrow(credentialFormSchema, requestBody);

    const certification = await fetchSignUp(validatedBody);
    const { accessToken, refreshToken } = certification.token;

    const response = NextResponse.json(success(null), { status: 200 });

    setAccessTokenToCookie(response, accessToken);
    setRefreshTokenToCookie(response, refreshToken);

    return response;
  } catch (e) {
    const result = failed(e);

    return NextResponse.json(result, { status: result.statusCode });
  }
};
