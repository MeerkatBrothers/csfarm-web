import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import todayQuizApi from "@/domains/quiz/datasources/todayQuizApi";
import { mapTodayQuizDtoToModel } from "@/domains/quiz/mappers/todayQuizMapper";
import { TodayQuiz } from "@/domains/quiz/models/todayQuiz";
import { TodayQuizResDto, todayQuizResDtoSchema } from "@/domains/quiz/dtos/response/todayQuizResDto";

const fetchTodayQuiz = async (): Promise<TodayQuiz> => {
  const apiResponse: ApiResponse<TodayQuizResDto> = await todayQuizApi();
  const data: TodayQuizResDto = apiResponse.data;

  const validatedData: TodayQuizResDto = validateOrThrow(todayQuizResDtoSchema, data);

  const todayQuiz: TodayQuiz = mapTodayQuizDtoToModel(validatedData);

  return todayQuiz;
};

export default fetchTodayQuiz;
