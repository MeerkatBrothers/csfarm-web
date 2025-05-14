import { mapQuizChoiceDtoToModel } from "@/domains/quiz/mappers/fragments/quizChoiceMapper";
import { Quiz } from "@/domains/quiz/models/fragments/quiz";
import { QuizDto } from "@/domains/quiz/dtos/fragments/quizDto";

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
