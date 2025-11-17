import { NextRequest } from 'next/server';

import { createBffHandler } from '@/lib/bff/handler';
import { getAccessTokenFromCookie } from '@/lib/cookie/accessToken';
import UnauthorizedError from '@/lib/errors/http/unauthorizedError';

import myProgressDatasource from '@/features/progress/datasources/myProgressDatasource';
import { type MyProgressResponse } from '@/features/progress/models/response/myProgressResponse';

const myProgressHandler = async (_: NextRequest): Promise<MyProgressResponse> => {
  const storedAccessToken = await getAccessTokenFromCookie();
  if (!storedAccessToken) {
    throw new UnauthorizedError();
  }

  const myPrgressResponse = await myProgressDatasource(storedAccessToken);

  return myPrgressResponse;
};

export const GET = createBffHandler(myProgressHandler);
