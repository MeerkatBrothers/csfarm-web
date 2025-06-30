import { QuizStatus } from "@/domains/quiz/models/quizStatus";
import { QuizStatusResDto } from "@/domains/quiz/dtos/response/quizStatusResDto";

export const mapQuizStatusDtoToModel = (dto: QuizStatusResDto): QuizStatus => {
  const { quizId, isThreshed } = dto;

  return {
    quizId,
    isThreshed,
  };
};
