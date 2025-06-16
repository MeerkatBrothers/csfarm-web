"use client";

import { useRouter } from "next/navigation";

import useMyProfile from "@/domains/profile/hooks/useMyProfile";

import ProfileSection from "@/components/organisms/ProfileSection";
import SecondaryButton from "@/components/atoms/button/SecondaryButton";
import MyProfileSectionSkeleton from "@/components/organisms/skeleton/MyProfileSectionSkeleton";

const MyProfileSection = () => {
  const router = useRouter();

  const { data: myProfile, isLoading, isError, error } = useMyProfile();

  if (isLoading) {
    return <MyProfileSectionSkeleton />;
  }

  if (isError) {
    throw error;
  }

  if (!myProfile) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <ProfileSection profile={myProfile.profile} />

      <SecondaryButton label="수정하기" onClick={() => router.push("/profile/update")} />
    </div>
  );
};

export default MyProfileSection;
