import { mapProfileDtoToModel } from '@/features/profile/mappers/fragments/profileMapper';
import { MyProfile } from '@/features/profile/models/myProfile';
import { MyProfileResDto } from '@/features/profile/dtos/response/myProfileResDto';

export const mapMyProfileResDtoToModel = (dto: MyProfileResDto): MyProfile => {
  const { profile } = dto;

  return {
    profile: mapProfileDtoToModel(profile),
  };
};
