import { NextRequest } from 'next/server';

import { createBffHandler } from '@/lib/bff/handler';
import { getAccessTokenFromCookie } from '@/lib/cookie/accessToken';
import UnauthorizedError from '@/lib/errors/http/unauthorizedError';

import updateProfileDatasource from '@/features/profile/datasources/updateProfileDatasource';
import { type UpdateProfileRequest } from '@/features/profile/models/request/updateProfileRequest';

const updateProfileHandler = async (request: NextRequest): Promise<null> => {
  const requestBody = (await request.json()) as UpdateProfileRequest;

  const storedAccessToken = await getAccessTokenFromCookie();
  if (!storedAccessToken) {
    throw new UnauthorizedError();
  }

  await updateProfileDatasource(requestBody, storedAccessToken);

  return null;
};

export const PATCH = createBffHandler(updateProfileHandler);
