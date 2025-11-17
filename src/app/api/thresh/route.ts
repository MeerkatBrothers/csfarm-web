import { NextRequest } from 'next/server';

import { createBffHandler } from '@/lib/bff/handler';
import { getAccessTokenFromCookie } from '@/lib/cookie/accessToken';
import UnauthorizedError from '@/lib/errors/http/unauthorizedError';

import threshDatasource from '@/features/thresh/datasources/threshDatasource';
import { type ThreshRequest } from '@/features/thresh/models/request/threshRequest';

const threshHandler = async (request: NextRequest): Promise<null> => {
  const requestBody = (await request.json()) as ThreshRequest;

  const storedAccessToken = await getAccessTokenFromCookie();
  if (!storedAccessToken) {
    throw new UnauthorizedError();
  }

  await threshDatasource(requestBody, storedAccessToken);

  return null;
};

export const POST = createBffHandler(threshHandler);
