"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx";

import useWithdraw from "@/domains/auth/hooks/useWithdraw";

import useMyProfile from "@/domains/profile/hooks/useMyProfile";
import useProfileForm from "@/domains/profile/hooks/useProfileForm";
import UpdateProfileButton from "@/domains/profile/components/UpdateProfileButton";
import ProfileImageEditor from "@/domains/profile/components/ProfileImageEditor";
import UpdateProfileSectionSkeleton from "@/domains/profile/components/skeleton/UpdateProfileSectionSkeleton";

import Caption1 from "@/components/atoms/typography/Caption1";
import FormInput from "@/components/atoms/input/FormInput";
import useAuthAction from "@/domains/auth/hooks/useAuthAction";

const UpdateProfileSection = () => {
  const router = useRouter();

  const { data: myProfile, isLoading, isError, error } = useMyProfile();

  const { profileForm, setNickname, uploadProfileImage } = useProfileForm({
    nickname: myProfile?.profile.nickname ?? "",
    profileImageUrl: myProfile?.profile.profileImageUrl ?? null,
  });

  const { mutate: withdraw } = useWithdraw({
    onSuccess: () => router.replace("/"),
  });

  const handleWithdraw = useAuthAction({
    action: () => {
      const confirm: boolean = window.confirm("회원 탈퇴 시 농장 정보가 사라집니다.\n정말 탈퇴하시겠어요?");
      if (confirm) {
        withdraw();
      }
    },
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

      <div className={clsx("flex flex-col gap-6", "md:w-fit md:self-end")}>
        <UpdateProfileButton profileForm={profileForm} />

        <button onClick={handleWithdraw}>
          <Caption1 text="회원탈퇴" styles={{ color: "text-gray-400" }} />
        </button>
      </div>
    </div>
  );
};

export default UpdateProfileSection;
