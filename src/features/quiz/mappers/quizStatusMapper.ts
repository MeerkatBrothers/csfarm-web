import { QuizStatus } from '@/features/quiz/models/quizStatus';
import { QuizStatusResDto } from '@/features/quiz/dtos/response/quizStatusResDto';

export const mapQuizStatusDtoToModel = (dto: QuizStatusResDto): QuizStatus => {
  const { quizId, isThreshed } = dto;

  return {
    quizId,
    isThreshed,
  };
};
