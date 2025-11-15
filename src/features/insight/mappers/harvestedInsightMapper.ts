import { mapMyInsightPreviewDtoToModel } from '@/features/insight/mappers/fragments/myInsightPreviewMapper';
import { HarvestedInsight } from '@/features/insight/models/harvestedInsight';
import { HarvestedInsightResDto } from '@/features/insight/dtos/response/harvestedInsightResDto';

export const mapHarvestedInsightDtoToModel = (dto: HarvestedInsightResDto): HarvestedInsight => {
  const { totalPage, currentPage, insights } = dto;

  return {
    totalPage,
    currentPage,
    insights: insights.map((insight) => mapMyInsightPreviewDtoToModel(insight)),
  };
};
