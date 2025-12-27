'use client';

import useMyProfile from '@/features/profile/hooks/useMyProfile';

import WelcomeMessageSkeleton from '@/components/atoms/skeleton/WelcomeMessageSkeleton';
import Title from '@/components/atoms/typography/Title';

const TodayQuizWelcomeMessage = () => {
  const { data: myProfile, isLoading } = useMyProfile();

  if (isLoading) return <WelcomeMessageSkeleton />;

  return (
    <Title
      text={`${myProfile?.nickname ?? '익명의'} 농부님! 오늘의 수확물을 타작해볼까요?`}
      scale={2}
    />
  );
};

export default TodayQuizWelcomeMessage;
