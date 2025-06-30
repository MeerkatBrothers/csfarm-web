import { InsightStatus } from "@/domains/insight/models/insightStatus";
import { InsightStatusResDto } from "@/domains/insight/dtos/response/insightStatusResDto";

export const mapInsightStatusDtoToModel = (dto: InsightStatusResDto): InsightStatus => {
  const { insightId, isHarvested } = dto;

  return {
    insightId,
    isHarvested,
  };
};
