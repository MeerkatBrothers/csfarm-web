import { createBffHandler } from '@/shared/utils/bff';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';

import fetchTodayQuiz from '@/features/quiz/apis/server/fetch-today-quiz';
import type { Quiz } from '@/features/quiz/models/quiz';

const todayQuizHandler = async (): Promise<Quiz> => {
  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  return await fetchTodayQuiz(storedAccessToken);
};

export const GET = createBffHandler(todayQuizHandler);
