import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ResultError from "@/lib/errors/resultError";

import quizStatusRepo from "@/domains/quiz/repositories/quizStatusRepo";
import { mapQuizStatusDtoToModel } from "@/domains/quiz/mappers/quizStatusMapper";
import { QuizStatus, quizStatusSchema } from "@/domains/quiz/models/quizStatus";
import { QuizStatusResDto } from "@/domains/quiz/dtos/response/quizStatusResDto";

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
