import { ProfileForm } from "@/domains/profile/models/fragments/profileForm";
import { ProfileFormDto } from "@/domains/profile/dtos/fragments/profileFormDto";

export const mapProfileFormToDto = (model: ProfileForm): ProfileFormDto => {
  const { nickname, profileImageUrl } = model;

  return {
    nickname,
    profileImageUrl,
  };
};
