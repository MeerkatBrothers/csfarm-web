import { validateOrThrow } from "@/lib/utils/zod";

import threshQuizApi from "@/domains/quiz/datasources/threshQuizApi";
import { ThreshQuizReqDto, threshQuizReqDtoSchema } from "@/domains/quiz/dtos/request/threshQuizReqDto";

const fetchThreshQuiz = async (quizId: number, choiceId: number): Promise<void> => {
  const requestBody: ThreshQuizReqDto = { quizId, choiceId };

  const validatedBody: ThreshQuizReqDto = validateOrThrow(threshQuizReqDtoSchema, requestBody);

  await threshQuizApi(validatedBody);
};

export default fetchThreshQuiz;
