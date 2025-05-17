import { mapQuizDtoToModel } from "@/domains/quiz/mappers/fragments/quizMapper";
import { TodayQuiz } from "@/domains/quiz/models/todayQuiz";
import { TodayQuizResDto } from "@/domains/quiz/dtos/response/todayQuizResDto";

export const mapTodayQuizDtoToModel = (dto: TodayQuizResDto): TodayQuiz => {
  const { quiz } = dto;

  return {
    quiz: mapQuizDtoToModel(quiz),
  };
};
