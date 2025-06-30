import { mapProgressDtoToModel } from "@/domains/progress/mappers/fragments/progressMapper";
import { MyProgress } from "@/domains/progress/models/myProgress";
import { MyProgressResDto } from "@/domains/progress/dtos/request/myProgressResDto";

export const mapMyProgressResDtoToModel = (dto: MyProgressResDto): MyProgress => {
  const { progresses } = dto;

  return {
    progresses: progresses.map((progress) => mapProgressDtoToModel(progress)),
  };
};
