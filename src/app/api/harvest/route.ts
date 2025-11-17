import { NextRequest } from 'next/server';

import { createBffHandler } from '@/lib/bff/handler';
import { getAccessTokenFromCookie } from '@/lib/cookie/accessToken';
import UnauthorizedError from '@/lib/errors/http/unauthorizedError';

import harvestDatasource from '@/features/harvest/datasources/harvestDatasource';
import { type HarvestRequest } from '@/features/harvest/models/request/harvestRequest';

const harvestHandler = async (request: NextRequest): Promise<null> => {
  const requestBody = (await request.json()) as HarvestRequest;

  const storedAccessToken = await getAccessTokenFromCookie();
  if (!storedAccessToken) {
    throw new UnauthorizedError();
  }

  await harvestDatasource(requestBody, storedAccessToken);

  return null;
};

export const POST = createBffHandler(harvestHandler);
