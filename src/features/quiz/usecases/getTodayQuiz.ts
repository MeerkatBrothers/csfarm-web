import { Result } from '@/lib/types/result';
import { validateOrThrow } from '@/lib/utils/zod';
import ResultError from '@/lib/errors/resultError';

import todayQuizRepo from '@/features/quiz/repositories/todayQuizRepo';
import { mapTodayQuizDtoToModel } from '@/features/quiz/mappers/todayQuizMapper';
import { TodayQuiz, todayQuizSchema } from '@/features/quiz/models/todayQuiz';
import { TodayQuizResDto } from '@/features/quiz/dtos/response/todayQuizResDto';

const getTodayQuiz = async (): Promise<TodayQuiz> => {
  const result: Result<TodayQuizResDto> = await todayQuizRepo();
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }

  const todayQuiz: TodayQuiz = mapTodayQuizDtoToModel(result.data);

  const validatedTodayQuiz: TodayQuiz = validateOrThrow(todayQuizSchema, todayQuiz);

  return validatedTodayQuiz;
};

export default getTodayQuiz;
