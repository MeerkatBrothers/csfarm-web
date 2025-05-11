import { mapInsightPreviewDtoToModel } from "@/domains/insight/mappers/fragments/insightPreviewMapper";
import { WeeklyInsight } from "@/domains/insight/models/fragments/weeklyInsight";
import { WeeklyInsightDto } from "@/domains/insight/dtos/fragments/weeklyInsightDto";

export const mapWeeklyInsightDtoToModel = (dto: WeeklyInsightDto): WeeklyInsight => {
  const { weekOffset, insights } = dto;

  return {
    weekOffset,
    insights: insights.map((insight) => mapInsightPreviewDtoToModel(insight)),
  };
};
