import { NextRequest } from 'next/server';

import { createBffHandler } from '@/shared/utils/bff';
import { validateOrThrow } from '@/shared/utils/zod';
import { getAccessTokenFromCookie } from '@/shared/cookie/access-token';
import { ClientErrorCode } from '@/shared/errors/client-error-code';
import UnauthorizedError from '@/shared/errors/api/unauthorized-error';

import fetchUpdateProfile from '@/features/profile/apis/server/fetch-update-profile';
import { profileFormSchema, type ProfileForm } from '@/features/profile/models/profile.form';

const updateProfileHandler = async (request: NextRequest): Promise<null> => {
  const requestBody = (await request.json()) as ProfileForm;
  const validatedBody = validateOrThrow(profileFormSchema, requestBody);

  const storedAccessToken = await getAccessTokenFromCookie();
  if (!storedAccessToken) throw new UnauthorizedError(ClientErrorCode.TOKEN_NOT_FOUND);

  await fetchUpdateProfile(validatedBody, storedAccessToken);

  return null;
};

export const PATCH = createBffHandler(updateProfileHandler);
