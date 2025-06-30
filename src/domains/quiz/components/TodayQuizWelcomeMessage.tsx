"use client";

import useMyProfile from "@/domains/profile/hooks/useMyProfile";

import Title2 from "@/components/atoms/typography/Title2";
import WelcomeMessageSkeleton from "@/components/atoms/skeleton/WelcomeMessageSkeleton";

const TodayQuizWelcomeMessage = () => {
  const { data: myProfile, isLoading } = useMyProfile();

  if (isLoading) {
    return <WelcomeMessageSkeleton />;
  }

  return <Title2 text={`${myProfile?.profile.nickname ?? "익명의"} 농부님! 오늘의 수확물을 타작해볼까요?`} />;
};

export default TodayQuizWelcomeMessage;
