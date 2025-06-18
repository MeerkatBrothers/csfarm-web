"use client";

import { useState } from "react";

import useTodayQuiz from "@/domains/quiz/hooks/useTodayQuiz";
import ThreshQuizButton from "@/domains/quiz/components/ThreshQuizButton";
import TodayQuizSectionSkeleton from "@/domains/quiz/components/skeleton/TodayQuizSectionSkeleton";

import Title3 from "@/components/atoms/typography/Title3";
import QuizSection from "@/components/organisms/QuizSection";

const TodayQuizSection = () => {
  const [choiceId, setChoiceId] = useState<number | null>(null);

  const { data: todayQuiz, isLoading, isError, error } = useTodayQuiz();

  if (isLoading) {
    return <TodayQuizSectionSkeleton />;
  }

  if (isError) {
    throw error;
  }

  if (!todayQuiz) {
    return null;
  }

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-2">
        <Title3 text="오늘의 타작물 🚜" />

        <QuizSection quiz={todayQuiz.quiz} choiceId={choiceId} onChoice={setChoiceId} />
      </div>

      <div className="md:self-end">
        <ThreshQuizButton quizId={todayQuiz.quiz.id} choiceId={choiceId} />
      </div>
    </div>
  );
};

export default TodayQuizSection;
