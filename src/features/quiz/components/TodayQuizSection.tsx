'use client';

import { useState } from 'react';

import useTodayQuiz from '@/features/quiz/hooks/useTodayQuiz';
import TodayQuizSectionSkeleton from '@/features/quiz/components/skeleton/TodayQuizSectionSkeleton';
import ThreshButton from '@/features/thresh/components/ThreshButton';

import Title from '@/components/atoms/typography/Title';
import QuizSection from '@/components/organisms/QuizSection';

const TodayQuizSection = () => {
  const [choiceId, setChoiceId] = useState<string | null>(null);

  const { data: todayQuiz, isLoading, isError, error } = useTodayQuiz();

  if (isLoading) return <TodayQuizSectionSkeleton />;
  if (isError) throw error;
  if (!todayQuiz) return null;

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-2">
        <Title text="오늘의 타작물 🚜" scale={3} />

        <QuizSection quiz={todayQuiz} choiceId={choiceId} onChoice={setChoiceId} />
      </div>

      <div className="md:self-end">
        <ThreshButton quizId={todayQuiz.id} choiceId={choiceId} />
      </div>
    </div>
  );
};

export default TodayQuizSection;
