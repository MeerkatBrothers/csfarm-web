import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { Quiz } from '@/features/quiz/models/quiz';

const fetchTodayQuiz = async (accessToken: string): Promise<Quiz> => {
  const endpoint = '/quiz/today';

  return await apiFetcher<Quiz>({
    endpoint,
    method: 'GET',
    token: accessToken,
  });
};

export default fetchTodayQuiz;
