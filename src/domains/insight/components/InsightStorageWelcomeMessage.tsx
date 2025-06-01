"use client";

import useMyProfile from "@/domains/profile/hooks/useMyProfile";

import Heading1 from "@/components/atoms/typography/Heading1";
import WelcomeMessageSkeleton from "@/components/atoms/skeleton/WelcomeMessageSkeleton";

const InsightStorageWelcomeMessage = () => {
  const { data: myProfile, isLoading } = useMyProfile();

  if (isLoading) {
    return <WelcomeMessageSkeleton />;
  }

  return <Heading1 text={`${myProfile?.profile.nickname ?? "익명의"} 농부님,\n그동안의 수확물을 확인해볼까요?`} />;
};

export default InsightStorageWelcomeMessage;
