import { InsightPreview } from '@/features/insight/models/fragments/insightPreview';
import { InsightPreviewDto } from '@/features/insight/dtos/fragments/insightPreviewDto';

export const mapInsightPreviewDtoToModel = (dto: InsightPreviewDto): InsightPreview => {
  const { id, subject, publishedAt, createdAt } = dto;

  return {
    id,
    subject,
    publishedAt,
    createdAt,
  };
};
