'use client';

import useMyProfile from '@/features/profile/hooks/useMyProfile';

import WelcomeMessageSkeleton from '@/components/atoms/skeleton/WelcomeMessageSkeleton';
import Title from '@/components/atoms/typography/Title';

const TodayInsightWelcomeMessage = () => {
  const { data: myProfile, isLoading } = useMyProfile();

  if (isLoading) return <WelcomeMessageSkeleton />;

  return (
    <Title
      text={`안녕하세요, ${myProfile?.nickname ?? '익명의'} 농부님! 오늘은 어떤 지식을 수확해볼까요?`}
      scale={2}
    />
  );
};

export default TodayInsightWelcomeMessage;
