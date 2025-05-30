"use client";

import { useState } from "react";

import useTodayQuiz from "@/domains/quiz/hooks/useTodayQuiz";
import QuizSectionSkeleton from "@/domains/quiz/components/QuizSectionSkeleton";
import ThreshQuizButton from "@/domains/quiz/components/ThreshQuizButton";

import QuizSection from "@/components/organisms/QuizSection";

const TodayQuizSection = () => {
  const [choiceId, setChoiceId] = useState<number | null>(null);

  const { data: todayQuiz, isLoading, isError, error } = useTodayQuiz();

  if (isLoading) {
    return <QuizSectionSkeleton />;
  }

  if (isError) {
    throw error;
  }

  if (!todayQuiz) {
    return null;
  }

  return (
    <div className="space-y-24">
      <QuizSection quiz={todayQuiz.quiz} choiceId={choiceId} onChoice={setChoiceId} />

      <div className="flex justify-end">
        <ThreshQuizButton quizId={todayQuiz.quiz.id} choiceId={choiceId} />
      </div>
    </div>
  );
};

export default TodayQuizSection;
