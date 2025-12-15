'use client';

import useAuthAction from '@/features/auth/hooks/useAuthAction';

import useHarvestStatus from '@/features/harvest/hooks/useHarvestStatus';
import useHarvest from '@/features/harvest/hooks/useHarvest';

import PrimaryButton from '@/components/atoms/button/PrimaryButton';
import DotLoader from '@/components/atoms/DotLoader';

interface HarvestInsightButtonProps {
  insightId: string;
}

const HarvestInsightButton = ({ insightId }: HarvestInsightButtonProps) => {
  const { data: insightStatus, isLoading } = useHarvestStatus(insightId);

  const { mutate: harvestInsight, isPending } = useHarvest({
    onSuccess: () => alert('오늘의 지식을 수확했어요!'),
  });

  const handleHarvestInsight = useAuthAction({ action: () => harvestInsight(insightId) });

  if (isLoading || isPending) {
    return <DotLoader />;
  }

  return (
    <PrimaryButton
      label={insightStatus?.isHarvested ? '이미 수확했어요!' : '수확하기'}
      disabled={insightStatus?.isHarvested}
      onClick={handleHarvestInsight}
    />
  );
};

export default HarvestInsightButton;
