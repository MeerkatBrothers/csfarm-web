import { useEffect, useState } from "react";

import { ProfileForm } from "@/domains/profile/models/fragments/profileForm";

import useUploadImage from "@/domains/image/hooks/useUploadImage";

const useProfileForm = (initialProfileForm: ProfileForm) => {
  const [profileForm, setProfileForm] = useState<ProfileForm>(initialProfileForm);

  const setNickname = (nickname: string) => {
    setProfileForm({ ...profileForm, nickname });
  };

  const { mutate: uploadProfileImage } = useUploadImage({
    onSuccess: (profileImageUrl) => setProfileForm({ ...profileForm, profileImageUrl }),
  });

  useEffect(() => {
    setProfileForm(initialProfileForm);
  }, [initialProfileForm.nickname, initialProfileForm.profileImageUrl]);

  return { profileForm, setNickname, uploadProfileImage };
};

export default useProfileForm;
