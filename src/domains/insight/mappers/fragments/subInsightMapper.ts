import { SubInsight } from "@/domains/insight/models/fragments/subInsight";
import { SubInsightDto } from "@/domains/insight/dtos/fragments/subInsightDto";

export const mapSubInsightDtoToModel = (dto: SubInsightDto): SubInsight => {
  const { id, insightId, subject, description, createdAt } = dto;

  return {
    id,
    insightId,
    subject,
    description,
    createdAt,
  };
};
