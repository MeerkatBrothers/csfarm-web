import { mapInsightDtoToModel } from '@/features/insight/mappers/fragments/insightMapper';
import { InsightDetail } from '@/features/insight/models/insightDetail';
import { InsightDetailResDto } from '@/features/insight/dtos/response/insightDetailResDto';

export const mapInsightDetailDtoToModel = (dto: InsightDetailResDto): InsightDetail => {
  const { insight } = dto;

  return {
    insight: mapInsightDtoToModel(insight),
  };
};
