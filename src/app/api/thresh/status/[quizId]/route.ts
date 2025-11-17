import { NextRequest, NextResponse } from 'next/server';

import { parsePathParam } from '@/lib/utils/parser/api';
import { BffContext, createBffHandler } from '@/lib/bff/handler';
import { getAccessTokenFromCookie } from '@/lib/cookie/accessToken';
import UnauthorizedError from '@/lib/errors/http/unauthorizedError';
import NotFoundError from '@/lib/errors/http/notFoundError';

import { QUIZ_NOT_FOUND_ERROR } from '@/features/quiz/constants/errorMessage';

import threshStatusDatasource from '@/features/thresh/datasources/threshStatusDatasource';
import { type ThreshStatusResponse } from '@/features/thresh/models/response/threshStatusResponse';

const threshStatusHandler = async (
  _: NextRequest,
  context: BffContext,
): Promise<ThreshStatusResponse> => {
  const params = context.params ?? {};
  const quizId = parsePathParam(params, 'quizId');
  if (!quizId) {
    throw new NotFoundError(QUIZ_NOT_FOUND_ERROR);
  }

  const storedAccessToken = await getAccessTokenFromCookie();
  if (!storedAccessToken) {
    throw new UnauthorizedError();
  }

  const threshStatus = await threshStatusDatasource(quizId, storedAccessToken);

  return threshStatus;
};

export const GET = createBffHandler(threshStatusHandler);
