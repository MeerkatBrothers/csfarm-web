import { QuizChoice } from "@/domains/quiz/models/fragments/quizChoice";
import { QuizChoiceDto } from "@/domains/quiz/dtos/fragments/quizChoiceDto";

export const mapQuizChoiceDtoToModel = (dto: QuizChoiceDto): QuizChoice => {
  const { id, quizId, content, order, createdAt } = dto;

  return {
    id,
    quizId,
    content,
    order,
    createdAt,
  };
};
