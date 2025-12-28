'use client';

import useMyProfile from '@/features/profile/hooks/useMyProfile';

import GreetingSkeleton from '@/components/atoms/skeleton/GreetingSkeleton';
import Heading from '@/components/atoms/typography/Heading';

const TodayInsightGreeting = () => {
  const { data: myProfile, isLoading } = useMyProfile();

  if (isLoading) return <GreetingSkeleton />;

  return (
    <Heading
      text={`안녕하세요, ${myProfile?.nickname ?? '익명의'} 농부님! 오늘은 어떤 지식을 수확해볼까요?`}
      scale={1}
    />
  );
};

export default TodayInsightGreeting;
