import { mapProfileDtoToModel } from "@/domains/profile/mappers/fragments/profileMapper";
import { MyProfile } from "@/domains/profile/models/myProfile";
import { MyProfileResDto } from "@/domains/profile/dtos/response/myProfileResDto";

export const mapMyProfileResDtoToModel = (dto: MyProfileResDto): MyProfile => {
  const { profile } = dto;

  return {
    profile: mapProfileDtoToModel(profile),
  };
};
