import { MyInsightPreview } from '@/features/insight/models/fragments/myInsightPreview';
import { MyInsightPreviewDto } from '@/features/insight/dtos/fragments/myInsightPreviewDto';

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
