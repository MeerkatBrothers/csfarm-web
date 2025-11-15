import { InsightStatus } from '@/features/insight/models/insightStatus';
import { InsightStatusResDto } from '@/features/insight/dtos/response/insightStatusResDto';

export const mapInsightStatusDtoToModel = (dto: InsightStatusResDto): InsightStatus => {
  const { insightId, isHarvested } = dto;

  return {
    insightId,
    isHarvested,
  };
};
