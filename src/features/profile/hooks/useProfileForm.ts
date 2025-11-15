import { useState, useEffect } from 'react';

import useUploadImage from '@/features/image/hooks/useUploadImage';

import { ProfileForm } from '@/features/profile/models/fragments/profileForm';

const useProfileForm = (initialProfileForm: ProfileForm) => {
  const [profileForm, setProfileForm] = useState<ProfileForm>(initialProfileForm);

  const setNickname = (nickname: string): void => setProfileForm({ ...profileForm, nickname });

  const { mutate: uploadProfileImage, isPending: isUploadImagePending } = useUploadImage({
    onSuccess: (profileImageUrl) => setProfileForm({ ...profileForm, profileImageUrl }),
  });

  useEffect(() => {
    setProfileForm(initialProfileForm);
  }, [initialProfileForm.nickname, initialProfileForm.profileImageUrl]);

  return { profileForm, isUploadImagePending, setNickname, uploadProfileImage };
};

export default useProfileForm;
