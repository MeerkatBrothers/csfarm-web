import { NextRequest } from 'next/server';

import { createBffHandler } from '@/shared/utils/bff';
import { getAccessTokenFromCookie } from '@/shared/cookie/access-token';
import { ApiErrorCode } from '@/shared/errors/api-error-code';
import UnauthorizedError from '@/shared/errors/api/unauthorized-error';

import fetchMyProfile from '@/features/profile/apis/server/fetch-my-profile';
import type { Profile } from '@/features/profile/models/profile';

const myProfileHandler = async (_: NextRequest): Promise<Profile> => {
  const storedAccessToken = await getAccessTokenFromCookie();
  if (!storedAccessToken) throw new UnauthorizedError(ApiErrorCode.E40101001);

  return await fetchMyProfile(storedAccessToken);
};

export const GET = createBffHandler(myProfileHandler);
