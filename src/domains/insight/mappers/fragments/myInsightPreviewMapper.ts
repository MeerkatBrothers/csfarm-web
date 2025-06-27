import { MyInsightPreview } from "@/domains/insight/models/fragments/myInsightPreview";
import { MyInsightPreviewDto } from "@/domains/insight/dtos/fragments/myInsightPreviewDto";

export const mapMyInsightPreviewDtoToModel = (dto: MyInsightPreviewDto): MyInsightPreview => {
  const { insightId, subject, isThreshed, publishedAt, createdAt } = dto;

  return {
    insightId,
    subject,
    isThreshed,
    publishedAt,
    createdAt,
  };
};
