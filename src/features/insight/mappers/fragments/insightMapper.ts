import { mapSubInsightDtoToModel } from '@/features/insight/mappers/fragments/subInsightMapper';
import { Insight } from '@/features/insight/models/fragments/insight';
import { InsightDto } from '@/features/insight/dtos/fragments/insightDto';

export const mapInsightDtoToModel = (dto: InsightDto): Insight => {
  const { id, subject, description, subInsights, publishedAt, createdAt } = dto;

  return {
    id,
    subject,
    description,
    subInsights: subInsights.map((subInsight) => mapSubInsightDtoToModel(subInsight)),
    publishedAt,
    createdAt,
  };
};
