import { mapInsightDtoToModel } from "@/domains/insight/mappers/fragments/insightMapper";
import { TodayInsight } from "@/domains/insight/models/todayInsight";
import { TodayInsightResDto } from "@/domains/insight/dtos/response/todayInsightResDto";

export const mapTodayInsightDtoToModel = (dto: TodayInsightResDto): TodayInsight => {
  const { insight } = dto;

  return {
    insight: mapInsightDtoToModel(insight),
  };
};
