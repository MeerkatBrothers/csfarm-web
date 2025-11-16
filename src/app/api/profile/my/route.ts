import { NextRequest } from 'next/server';

import { createBffHandler } from '@/lib/bff/handler';
import { getAccessTokenFromCookie } from '@/lib/cookie/accessToken';
import UnauthorizedError from '@/lib/errors/http/unauthorizedError';

import myProfileDatasource from '@/features/profile/datasources/myProfileDatasource';
import { type MyProfileResponse } from '@/features/profile/models/response/myProfileResponse';

const myProfileHandler = async (_: NextRequest): Promise<MyProfileResponse> => {
  const storedAccessToken = await getAccessTokenFromCookie();
  if (!storedAccessToken) {
    throw new UnauthorizedError();
  }

  const myProfileResponse = await myProfileDatasource(storedAccessToken);

  return myProfileResponse;
};

export const GET = createBffHandler(myProfileHandler);
