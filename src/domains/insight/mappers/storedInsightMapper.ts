import { mapInsightPreviewDtoToModel } from "@/domains/insight/mappers/fragments/insightPreviewMapper";
import { StoredInsight } from "@/domains/insight/models/storedInsight";
import { StoredInsightResDto } from "@/domains/insight/dtos/response/storedInsightResDto";

export const mapStoredInsightDtoToModel = (dto: StoredInsightResDto): StoredInsight => {
  const { insights } = dto;

  return {
    insights: insights.map((insight) => mapInsightPreviewDtoToModel(insight)),
  };
};
