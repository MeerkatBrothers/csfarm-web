import { Progress } from '@/features/progress/models/fragments/progress';
import { ProgressDto } from '@/features/progress/dtos/fragments/progressDto';

export const mapProgressDtoToModel = (dto: ProgressDto): Progress => {
  const { isHarvested, isThreshed, date } = dto;

  return {
    isHarvested,
    isThreshed,
    date,
  };
};
