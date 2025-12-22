import { NextRequest } from 'next/server';

import { createBffHandler } from '@/shared/utils/bff';
import { getAccessTokenFromCookie } from '@/shared/cookie/access-token';
import { ClientErrorCode } from '@/shared/errors/client-error-code';
import UnauthorizedError from '@/shared/errors/api/unauthorized-error';

import fetchMyProfile from '@/features/profile/apis/server/fetch-my-profile';
import type { Profile } from '@/features/profile/models/profile';

const myProfileHandler = async (_: NextRequest): Promise<Profile> => {
  const storedAccessToken = await getAccessTokenFromCookie();
  if (!storedAccessToken) throw new UnauthorizedError(ClientErrorCode.TOKEN_NOT_FOUND);

  return await fetchMyProfile(storedAccessToken);
};

export const GET = createBffHandler(myProfileHandler);
