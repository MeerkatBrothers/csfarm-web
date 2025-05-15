import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import quizStatusApi from "@/domains/quiz/datasources/quizStatusApi";
import { mapQuizStatusDtoToModel } from "@/domains/quiz/mappers/quizStatusMapper";
import { QuizStatus } from "@/domains/quiz/models/quizStatus";
import { QuizStatusResDto, quizStatusResDtoSchema } from "@/domains/quiz/dtos/response/quizStatusResDto";

const fetchQuizStatus = async (quizId: number): Promise<QuizStatus> => {
  const apiResponse: ApiResponse<QuizStatusResDto> = await quizStatusApi(quizId);
  const data: QuizStatusResDto = apiResponse.data;

  const validatedData: QuizStatusResDto = validateOrThrow(quizStatusResDtoSchema, data);

  const quizStatus: QuizStatus = mapQuizStatusDtoToModel(validatedData);

  return quizStatus;
};

export default fetchQuizStatus;
