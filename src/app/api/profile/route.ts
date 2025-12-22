import { NextRequest } from 'next/server';

import { createBffHandler } from '@/shared/utils/bff';
import { getAccessTokenFromCookie } from '@/shared/cookie/access-token';
import { ApiErrorCode } from '@/shared/errors/api-error-code';
import UnauthorizedError from '@/shared/errors/api/unauthorized-error';

import fetchUpdateProfile from '@/features/profile/apis/server/fetch-update-profile';
import type { ProfileForm } from '@/features/profile/models/profile.form';

const updateProfileHandler = async (request: NextRequest): Promise<null> => {
  const requestBody = (await request.json()) as ProfileForm;

  const storedAccessToken = await getAccessTokenFromCookie();
  if (!storedAccessToken) throw new UnauthorizedError(ApiErrorCode.E40101001);

  await fetchUpdateProfile(requestBody, storedAccessToken);

  return null;
};

export const PATCH = createBffHandler(updateProfileHandler);
