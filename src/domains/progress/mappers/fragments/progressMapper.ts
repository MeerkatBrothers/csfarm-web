import { Progress } from "@/domains/progress/models/fragments/progress";
import { ProgressDto } from "@/domains/progress/dtos/fragments/progressDto";

export const mapProgressDtoToModel = (dto: ProgressDto): Progress => {
  const { isHarvested, isThreshed, date } = dto;

  return {
    isHarvested,
    isThreshed,
    date,
  };
};
