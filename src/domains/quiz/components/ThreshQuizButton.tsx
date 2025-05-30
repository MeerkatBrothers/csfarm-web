"use client";

import useQuizStatus from "@/domains/quiz/hooks/useQuizStatus";
import useThreshQuiz from "@/domains/quiz/hooks/useThreshQuiz";

import PrimaryButton from "@/components/atoms/button/PrimaryButton";
import DotLoader from "@/components/atoms/DotLoader";
import useAuthAction from "@/domains/auth/hooks/useAuthAction";

interface ThreshQuizButtonProps {
  quizId: number;
  choiceId: number | null;
}

const ThreshQuizButton = ({ quizId, choiceId }: ThreshQuizButtonProps) => {
  const { data: quizStatus, isLoading } = useQuizStatus(quizId);

  const { mutate: threshQuiz, isPending } = useThreshQuiz({
    onSuccess: () => alert("오늘의 퀴즈를 타작했어요!"),
  });

  const handleThreshQuiz = useAuthAction({ action: () => threshQuiz({ quizId, choiceId }) });

  if (isLoading || isPending) {
    return <DotLoader />;
  }

  return (
    <PrimaryButton
      label={quizStatus?.isThreshed ? "이미 타작했어요!" : "타작하기"}
      disabled={quizStatus?.isThreshed}
      onClick={handleThreshQuiz}
    />
  );
};

export default ThreshQuizButton;
