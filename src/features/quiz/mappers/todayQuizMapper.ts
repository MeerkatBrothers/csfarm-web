import { mapQuizDtoToModel } from '@/features/quiz/mappers/fragments/quizMapper';
import { TodayQuiz } from '@/features/quiz/models/todayQuiz';
import { TodayQuizResDto } from '@/features/quiz/dtos/response/todayQuizResDto';

export const mapTodayQuizDtoToModel = (dto: TodayQuizResDto): TodayQuiz => {
  const { quiz } = dto;

  return {
    quiz: mapQuizDtoToModel(quiz),
  };
};
