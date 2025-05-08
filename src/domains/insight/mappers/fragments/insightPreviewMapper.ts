import { InsightPreview } from "@/domains/insight/models/fragments/insightPreview";
import { InsightPreviewDto } from "@/domains/insight/dtos/fragments/insightPreviewDto";

export const mapInsightPreviewDtoToModel = (dto: InsightPreviewDto): InsightPreview => {
  const { id, subject, publishedAt, createdAt } = dto;

  return {
    id,
    subject,
    publishedAt,
    createdAt,
  };
};
