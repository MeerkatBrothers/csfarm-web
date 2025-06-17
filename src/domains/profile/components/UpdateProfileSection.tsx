"use client";

import useMyProfile from "@/domains/profile/hooks/useMyProfile";
import useProfileForm from "@/domains/profile/hooks/useProfileForm";
import UpdateProfileButton from "@/domains/profile/components/UpdateProfileButton";
import ProfileImageEditor from "@/domains/profile/components/ProfileImageEditor";
import UpdateProfileSectionSkeleton from "@/domains/profile/components/skeleton/UpdateProfileSectionSkeleton";

import FormInput from "@/components/atoms/input/FormInput";

const UpdateProfileSection = () => {
  const { data: myProfile, isLoading, isError, error } = useMyProfile();

  const { profileForm, setNickname, uploadProfileImage } = useProfileForm({
    nickname: myProfile?.profile.nickname ?? "",
    profileImageUrl: myProfile?.profile.profileImageUrl ?? null,
  });

  if (isLoading) {
    return <UpdateProfileSectionSkeleton />;
  }

  if (isError) {
    throw error;
  }

  if (!myProfile) {
    return null;
  }

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col items-center gap-2">
        <ProfileImageEditor initialProfileImageUrl={profileForm.profileImageUrl} onSelect={uploadProfileImage} />

        <FormInput label="농부명" value={profileForm.nickname} placeholder="농부명을 입력해주세요." onChange={setNickname} />
      </div>

      <div className="flex justify-end">
        <UpdateProfileButton profileForm={profileForm} />
      </div>
    </div>
  );
};

export default UpdateProfileSection;
