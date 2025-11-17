import ResultError from '@/lib/errors/resultError';

import todayQuizRepository from '@/features/quiz/repositories/todayQuizRepository';
import { type TodayQuizResponse } from '@/features/quiz/models/response/todayQuizResponse';

const getTodayQuiz = async (): Promise<TodayQuizResponse> => {
  const result = await todayQuizRepository();
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }

  const todayQuiz = result.data;

  return todayQuiz;
};

export default getTodayQuiz;
