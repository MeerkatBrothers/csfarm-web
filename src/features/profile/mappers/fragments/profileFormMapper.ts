import { ProfileForm } from '@/features/profile/models/fragments/profileForm';
import { ProfileFormDto } from '@/features/profile/dtos/fragments/profileFormDto';

export const mapProfileFormToDto = (model: ProfileForm): ProfileFormDto => {
  const { nickname, profileImageUrl } = model;

  return {
    nickname,
    profileImageUrl,
  };
};
