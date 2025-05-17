import { Profile } from "@/domains/profile/models/fragments/profile";
import { ProfileDto } from "@/domains/profile/dtos/fragments/profileDto";

export const mapProfileDtoToModel = (dto: ProfileDto): Profile => {
  const { id, memberId, nickname, profileImageUrl, createdAt } = dto;

  return {
    id,
    memberId,
    nickname,
    profileImageUrl,
    createdAt,
  };
};
