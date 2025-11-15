import { mapQuizChoiceDtoToModel } from '@/features/quiz/mappers/fragments/quizChoiceMapper';
import { Quiz } from '@/features/quiz/models/fragments/quiz';
import { QuizDto } from '@/features/quiz/dtos/fragments/quizDto';

export const mapQuizDtoToModel = (dto: QuizDto): Quiz => {
  const { id, insightId, content, choices, publishedAt, createdAt } = dto;

  return {
    id,
    insightId,
    content,
    choices: choices.map((choice) => mapQuizChoiceDtoToModel(choice)),
    publishedAt,
    createdAt,
  };
};
