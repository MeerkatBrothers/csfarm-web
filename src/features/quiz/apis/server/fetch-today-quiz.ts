import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { Quiz } from '@/features/quiz/models/quiz';

const fetchTodayQuiz = async (): Promise<Quiz> => {
  const endpoint = '/quiz/today';

  return await apiFetcher<Quiz>({
    endpoint,
    method: 'GET',
  });
};

export default fetchTodayQuiz;
