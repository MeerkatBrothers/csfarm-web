import { useQuery } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import QUIZ_QUERY_KEYS from '@/features/quiz/constants/query-key';
import getTodayQuiz from '@/features/quiz/apis/bff/get-today-quiz';
import type { Quiz } from '@/features/quiz/models/quiz';

const useTodayQuiz = () => {
  return useQuery<Quiz>({
    queryKey: QUIZ_QUERY_KEYS.TODAY,
    queryFn: async () => {
      const result = await getTodayQuiz();
      if (!result.ok) throw new ResultError(result.statusCode, result.code);

      return result.data;
    },
  });
};

export default useTodayQuiz;
