"use client";

import { useRouter } from "next/navigation";

import useAuthAction from "@/domains/auth/hooks/useAuthAction";

import useUpdateProfile from "@/domains/profile/hooks/useUpdateProfile";
import { ProfileForm } from "@/domains/profile/models/fragments/profileForm";

import PrimaryButton from "@/components/atoms/button/PrimaryButton";
import DotLoader from "@/components/atoms/DotLoader";

interface UpdateProfileButtonProps {
  profileForm: ProfileForm;
}

const UpdateProfileButton = ({ profileForm }: UpdateProfileButtonProps) => {
  const router = useRouter();

  const { mutate: updateProfile, isPending } = useUpdateProfile({
    onSuccess: () => {
      alert("프로필이 변경되었어요.");

      router.back();
    },
  });

  const handleUpdateProfile = useAuthAction({ action: () => updateProfile(profileForm) });

  if (isPending) {
    return <DotLoader />;
  }

  return <PrimaryButton label="변경하기" onClick={handleUpdateProfile} />;
};

export default UpdateProfileButton;
