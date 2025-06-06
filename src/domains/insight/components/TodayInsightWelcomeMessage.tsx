"use client";

import useMyProfile from "@/domains/profile/hooks/useMyProfile";

import Title2 from "@/components/atoms/typography/Title2";
import WelcomeMessageSkeleton from "@/components/atoms/skeleton/WelcomeMessageSkeleton";

const TodayInsightWelcomeMessage = () => {
  const { data: myProfile, isLoading } = useMyProfile();

  if (isLoading) {
    return <WelcomeMessageSkeleton />;
  }

  return <Title2 text={`안녕하세요, ${myProfile?.profile.nickname ?? "익명의"} 농부님! 오늘은 어떤 지식을 수확해볼까요?`} />;
};

export default TodayInsightWelcomeMessage;
