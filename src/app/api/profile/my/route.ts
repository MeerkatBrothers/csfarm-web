import { NextRequest } from 'next/server';

import { createBffHandler } from '@/shared/utils/bff';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';

import fetchMyProfile from '@/features/profile/apis/server/fetch-my-profile';
import type { Profile } from '@/features/profile/models/profile';

const myProfileHandler = async (_: NextRequest): Promise<Profile> => {
  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  return await fetchMyProfile(storedAccessToken);
};

export const GET = createBffHandler(myProfileHandler);
