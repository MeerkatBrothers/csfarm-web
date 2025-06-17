import { useQuery } from "@tanstack/react-query";

import QUIZ_QUERY_KEYS from "@/domains/quiz/constants/queryKey";
import getTodayQuiz from "@/domains/quiz/usecases/getTodayQuiz";
import { TodayQuiz } from "@/domains/quiz/models/todayQuiz";

const useTodayQuiz = () => {
  return useQuery<TodayQuiz>({
    queryKey: QUIZ_QUERY_KEYS.TODAY(),
    queryFn: getTodayQuiz,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    retry: false,
  });
};

export default useTodayQuiz;
