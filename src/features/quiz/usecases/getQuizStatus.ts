import { Result } from '@/lib/types/result';
import { validateOrThrow } from '@/lib/utils/zod';
import ResultError from '@/lib/errors/resultError';

import quizStatusRepo from '@/features/quiz/repositories/quizStatusRepo';
import { mapQuizStatusDtoToModel } from '@/features/quiz/mappers/quizStatusMapper';
import { QuizStatus, quizStatusSchema } from '@/features/quiz/models/quizStatus';
import { QuizStatusResDto } from '@/features/quiz/dtos/response/quizStatusResDto';

const getQuizStatus = async (quizId: number): Promise<QuizStatus> => {
  const result: Result<QuizStatusResDto> = await quizStatusRepo(quizId);
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }

  const quizStatus: QuizStatus = mapQuizStatusDtoToModel(result.data);

  const validatedQuizStatus: QuizStatus = validateOrThrow(quizStatusSchema, quizStatus);

  return validatedQuizStatus;
};

export default getQuizStatus;
