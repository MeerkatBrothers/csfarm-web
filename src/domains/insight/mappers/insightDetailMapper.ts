import { mapInsightDtoToModel } from "@/domains/insight/mappers/fragments/insightMapper";
import { InsightDetail } from "@/domains/insight/models/insightDetail";
import { InsightDetailResDto } from "@/domains/insight/dtos/response/insightDetailResDto";

export const mapInsightDetailDtoToModel = (dto: InsightDetailResDto): InsightDetail => {
  const { insight } = dto;

  return {
    insight: mapInsightDtoToModel(insight),
  };
};
