import { NextRequest } from 'next/server';

import { createBffHandler } from '@/lib/bff/handler';
import { getAccessTokenFromCookie } from '@/lib/cookie/accessToken';
import UnauthorizedError from '@/lib/errors/http/unauthorizedError';

import todayQuizDatasource from '@/features/quiz/datasources/todayQuizSource';
import { type TodayQuizResponse } from '@/features/quiz/models/response/todayQuizResponse';

const todayQuizHandler = async (_: NextRequest): Promise<TodayQuizResponse> => {
  const storedAccessToken = await getAccessTokenFromCookie();
  if (!storedAccessToken) {
    throw new UnauthorizedError();
  }

  const todayQuiz = await todayQuizDatasource(storedAccessToken);

  return todayQuiz;
};

export const GET = createBffHandler(todayQuizHandler);
