'use client';

import { toast } from 'react-toastify';

import useAuthAction from '@/features/auth/hooks/useAuthAction';

import useThreshStatus from '@/features/thresh/hooks/useThreshStatus';
import useThresh from '@/features/thresh/hooks/useThresh';

import PrimaryButton from '@/components/atoms/button/PrimaryButton';
import DotLoader from '@/components/atoms/DotLoader';
import RewardIncreaseLabel from '@/components/atoms/RewardIncreaseLabel';

interface ThreshButtonProps {
  quizId: string;
  choiceId: string | null;
}

const ThreshButton = ({ quizId, choiceId }: ThreshButtonProps) => {
  const { data: threshStatus, isLoading } = useThreshStatus(quizId);

  const { mutate: thresh, isPending } = useThresh({
    onSuccess: () => toast.success('오늘의 퀴즈를 타작했어요!'),
  });

  const handleThresh = useAuthAction({ action: () => thresh({ quizId, choiceId }) });

  if (isLoading || isPending) return <DotLoader />;

  return (
    <div className="flex flex-col items-center gap-1">
      {!threshStatus?.isThreshed && <RewardIncreaseLabel />}

      <PrimaryButton
        label={threshStatus?.isThreshed ? '이미 타작했어요!' : '타작하기'}
        disabled={threshStatus?.isThreshed}
        onClick={handleThresh}
      />
    </div>
  );
};

export default ThreshButton;
