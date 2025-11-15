import { mapInsightDtoToModel } from '@/features/insight/mappers/fragments/insightMapper';
import { TodayInsight } from '@/features/insight/models/todayInsight';
import { TodayInsightResDto } from '@/features/insight/dtos/response/todayInsightResDto';

export const mapTodayInsightDtoToModel = (dto: TodayInsightResDto): TodayInsight => {
  const { insight } = dto;

  return {
    insight: mapInsightDtoToModel(insight),
  };
};
