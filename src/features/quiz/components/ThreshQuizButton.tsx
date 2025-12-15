'use client';

import useAuthAction from '@/features/auth/hooks/useAuthAction';

import useThreshStatus from '@/features/thresh/hooks/useThreshStatus';
import useThresh from '@/features/thresh/hooks/useThresh';

import PrimaryButton from '@/components/atoms/button/PrimaryButton';
import DotLoader from '@/components/atoms/DotLoader';
import RewardIncreaseLabel from '@/components/atoms/RewardIncreaseLabel';

interface ThreshQuizButtonProps {
  quizId: string;
  choiceId: string | null;
}

const ThreshQuizButton = ({ quizId, choiceId }: ThreshQuizButtonProps) => {
  const { data: quizStatus, isLoading } = useThreshStatus(quizId);

  const { mutate: threshQuiz, isPending } = useThresh({
    onSuccess: () => alert('오늘의 퀴즈를 타작했어요!'),
  });

  const handleThreshQuiz = useAuthAction({ action: () => threshQuiz({ quizId, choiceId }) });

  if (isLoading || isPending) {
    return <DotLoader />;
  }

  return (
    <div className="flex flex-col items-center gap-1">
      {!quizStatus?.isThreshed && <RewardIncreaseLabel />}

      <PrimaryButton
        label={quizStatus?.isThreshed ? '이미 타작했어요!' : '타작하기'}
        disabled={quizStatus?.isThreshed}
        onClick={handleThreshQuiz}
      />
    </div>
  );
};

export default ThreshQuizButton;
