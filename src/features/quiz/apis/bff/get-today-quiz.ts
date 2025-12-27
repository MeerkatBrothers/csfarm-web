import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import { type Result } from '@/shared/types/result';

import type { Quiz } from '@/features/quiz/models/quiz';

const getTodayQuiz = async (): Promise<Result<Quiz>> => {
  const endpoint = '/quiz/today';

  return await bffFetcher<Quiz>({
    endpoint,
    method: 'GET',
  });
};

export default getTodayQuiz;
