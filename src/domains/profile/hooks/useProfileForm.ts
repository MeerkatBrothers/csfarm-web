import { useState, useEffect } from "react";

import useUploadImage from "@/domains/image/hooks/useUploadImage";

import { ProfileForm } from "@/domains/profile/models/fragments/profileForm";

const useProfileForm = (initialProfileForm: ProfileForm) => {
  const [profileForm, setProfileForm] = useState<ProfileForm>(initialProfileForm);

  const setNickname = (nickname: string): void => setProfileForm({ ...profileForm, nickname });

  const { mutate: uploadProfileImage } = useUploadImage({
    onSuccess: (profileImageUrl) => setProfileForm({ ...profileForm, profileImageUrl }),
  });

  useEffect(() => {
    setProfileForm(initialProfileForm);
  }, [initialProfileForm.nickname, initialProfileForm.profileImageUrl]);

  return { profileForm, setNickname, uploadProfileImage };
};

export default useProfileForm;
