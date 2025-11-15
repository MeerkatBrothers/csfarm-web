import { mapProgressDtoToModel } from '@/features/progress/mappers/fragments/progressMapper';
import { MyProgress } from '@/features/progress/models/myProgress';
import { MyProgressResDto } from '@/features/progress/dtos/request/myProgressResDto';

export const mapMyProgressResDtoToModel = (dto: MyProgressResDto): MyProgress => {
  const { progresses } = dto;

  return {
    progresses: progresses.map((progress) => mapProgressDtoToModel(progress)),
  };
};
