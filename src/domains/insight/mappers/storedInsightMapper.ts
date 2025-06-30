import { mapWeeklyInsightDtoToModel } from "@/domains/insight/mappers/fragments/weeklyInsightMapper";
import { StoredInsight } from "@/domains/insight/models/storedInsight";
import { StoredInsightResDto } from "@/domains/insight/dtos/response/storedInsightResDto";

export const mapStoredInsightDtoToModel = (dto: StoredInsightResDto): StoredInsight => {
  const { weeklyInsights } = dto;

  return {
    weeklyInsights: weeklyInsights.map((weeklyInsight) => mapWeeklyInsightDtoToModel(weeklyInsight)),
  };
};
