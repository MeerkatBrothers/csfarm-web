import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ResultError from "@/lib/errors/resultError";

import threshQuizRepo from "@/domains/quiz/repositories/threshQuizRepo";
import { ThreshQuizReqDto, threshQuizReqDtoSchema } from "@/domains/quiz/dtos/request/threshQuizReqDto";

const threshQuiz = async (quizId: number, choiceId: number): Promise<void> => {
  const requestBody: ThreshQuizReqDto = { quizId, choiceId };
  const validatedRequestBody: ThreshQuizReqDto = validateOrThrow(threshQuizReqDtoSchema, requestBody);

  const result: Result<null> = await threshQuizRepo(validatedRequestBody);
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }
};

export default threshQuiz;
