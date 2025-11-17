import { useQuery } from '@tanstack/react-query';

import QUIZ_QUERY_KEYS from '@/features/quiz/constants/queryKey';
import getTodayQuiz from '@/features/quiz/usecases/getTodayQuiz';
import { type TodayQuizResponse } from '@/features/quiz/models/response/todayQuizResponse';

const useTodayQuiz = () => {
  return useQuery<TodayQuizResponse>({
    queryKey: QUIZ_QUERY_KEYS.TODAY(),
    queryFn: getTodayQuiz,
  });
};

export default useTodayQuiz;
