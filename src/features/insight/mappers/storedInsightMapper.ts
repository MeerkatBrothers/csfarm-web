import { mapWeeklyInsightDtoToModel } from '@/features/insight/mappers/fragments/weeklyInsightMapper';
import { StoredInsight } from '@/features/insight/models/storedInsight';
import { StoredInsightResDto } from '@/features/insight/dtos/response/storedInsightResDto';

export const mapStoredInsightDtoToModel = (dto: StoredInsightResDto): StoredInsight => {
  const { weeklyInsights } = dto;

  return {
    weeklyInsights: weeklyInsights.map((weeklyInsight) =>
      mapWeeklyInsightDtoToModel(weeklyInsight),
    ),
  };
};
