import { mapInsightPreviewDtoToModel } from '@/features/insight/mappers/fragments/insightPreviewMapper';
import { WeeklyInsight } from '@/features/insight/models/fragments/weeklyInsight';
import { WeeklyInsightDto } from '@/features/insight/dtos/fragments/weeklyInsightDto';

export const mapWeeklyInsightDtoToModel = (dto: WeeklyInsightDto): WeeklyInsight => {
  const { weekOffset, insights } = dto;

  return {
    weekOffset,
    insights: insights.map((insight) => mapInsightPreviewDtoToModel(insight)),
  };
};
