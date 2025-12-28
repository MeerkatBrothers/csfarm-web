'use client';

import { useState } from 'react';

import useTodayQuiz from '@/features/quiz/hooks/useTodayQuiz';
import ThreshButton from '@/features/thresh/components/ThreshButton';
import TodayQuizSectionSkeleton from '@/features/quiz/components/skeleton/TodayQuizSectionSkeleton';

import QuizCard from '@/components/organisms/QuizCard';
import QuizChoiceCard from '@/components/organisms/QuizChoiceCard';

const TodayQuizSection = () => {
  const [choiceId, setChoiceId] = useState<string | null>(null);

  const { data: todayQuiz, isLoading, isError, error } = useTodayQuiz();

  const handleChoice = (choiceId: string): void => setChoiceId(choiceId);

  if (isLoading) return <TodayQuizSectionSkeleton />;
  if (isError) throw error;
  if (!todayQuiz) return null;

  const { id, question, choices } = todayQuiz;

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-12">
        <QuizCard question={question} />

        <div className="flex flex-col gap-4">
          {choices.map((choice) => {
            const { id, option } = choice;

            return (
              <QuizChoiceCard
                key={`quiz-choice-${id}`}
                id={id}
                option={option}
                isChoiced={id === choiceId}
                onChoice={handleChoice}
              />
            );
          })}
        </div>
      </div>

      <div className="md:self-end">
        <ThreshButton quizId={id} choiceId={choiceId} />
      </div>
    </div>
  );
};

export default TodayQuizSection;
