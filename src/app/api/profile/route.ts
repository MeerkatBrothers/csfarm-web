import { NextRequest } from 'next/server';

import { createBffHandler } from '@/shared/utils/bff';
import { parseJsonOrThrow } from '@/shared/utils/parser/request';
import { validateOrThrow } from '@/shared/utils/zod';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';

import fetchUpdateProfile from '@/features/profile/apis/server/fetch-update-profile';
import { profileFormSchema } from '@/features/profile/models/profile.form';

const updateProfileHandler = async (request: NextRequest): Promise<null> => {
  const requestBody = await parseJsonOrThrow(request);
  const validatedBody = validateOrThrow(profileFormSchema, requestBody);

  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  await fetchUpdateProfile(validatedBody, storedAccessToken);

  return null;
};

export const PATCH = createBffHandler(updateProfileHandler);
