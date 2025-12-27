'use client';

import { toast } from 'react-toastify';

import useAuthAction from '@/features/auth/hooks/useAuthAction';

import useHarvestStatus from '@/features/harvest/hooks/useHarvestStatus';
import useHarvest from '@/features/harvest/hooks/useHarvest';

import PrimaryButton from '@/components/atoms/button/PrimaryButton';
import DotLoader from '@/components/atoms/DotLoader';

interface HarvestButtonProps {
  insightId: string;
}

const HarvestButton = ({ insightId }: HarvestButtonProps) => {
  const { data: harvestStatus, isLoading } = useHarvestStatus(insightId);

  const { mutate: harvest, isPending } = useHarvest({
    onSuccess: () => toast.success('오늘의 지식을 수확했어요!'),
  });

  const handleHarvest = useAuthAction({ action: () => harvest(insightId) });

  if (isLoading || isPending) return <DotLoader />;

  return (
    <PrimaryButton
      label={harvestStatus?.isHarvested ? '이미 수확했어요!' : '수확하기'}
      disabled={harvestStatus?.isHarvested}
      onClick={handleHarvest}
    />
  );
};

export default HarvestButton;
