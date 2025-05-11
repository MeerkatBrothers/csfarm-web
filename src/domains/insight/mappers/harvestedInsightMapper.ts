import { mapMyInsightPreviewDtoToModel } from "@/domains/insight/mappers/fragments/myInsightPreviewMapper";
import { HarvestedInsight } from "@/domains/insight/models/harvestedInsight";
import { HarvestedInsightResDto } from "@/domains/insight/dtos/response/harvestedInsightResDto";

export const mapHarvestedInsightDtoToModel = (dto: HarvestedInsightResDto): HarvestedInsight => {
  const { totalPage, currentPage, insights } = dto;

  return {
    totalPage,
    currentPage,
    insights: insights.map((insight) => mapMyInsightPreviewDtoToModel(insight)),
  };
};
