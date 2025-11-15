import { QuizChoice } from '@/features/quiz/models/fragments/quizChoice';
import { QuizChoiceDto } from '@/features/quiz/dtos/fragments/quizChoiceDto';

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
