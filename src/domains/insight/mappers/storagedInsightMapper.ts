import { mapInsightPreviewDtoToModel } from "@/domains/insight/mappers/fragments/insightPreviewMapper";
import { StoragedInsight } from "@/domains/insight/models/storagedInsight";
import { StoragedInsightResDto } from "@/domains/insight/dtos/response/storagedInsightResDto";

export const mapStoragedInsightDtoToModel = (dto: StoragedInsightResDto): StoragedInsight => {
  const { insights } = dto;

  return {
    insights: insights.map((insight) => mapInsightPreviewDtoToModel(insight)),
  };
};
