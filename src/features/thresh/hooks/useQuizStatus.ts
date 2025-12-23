import { useQuery } from '@tanstack/react-query';

import QUIZ_QUERY_KEYS from '@/features/quiz/constants/queryKey';
import getQuizStatus from '@/features/quiz/usecases/getQuizStatus';
import { QuizStatus } from '@/features/quiz/models/quizStatus';

const useQuizStatus = (quizId: number) => {
  return useQuery<QuizStatus>({
    queryKey: QUIZ_QUERY_KEYS.STATUS(quizId),
    queryFn: async () => await getQuizStatus(quizId),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    retry: false,
  });
};

export default useQuizStatus;
