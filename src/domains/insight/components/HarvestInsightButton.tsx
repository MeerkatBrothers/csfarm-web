"use client";

import useInsightStatus from "@/domains/insight/hooks/useInsightStatus";
import useHarvestInsight from "@/domains/insight/hooks/useHarvestInsight";
import useAuthAction from "@/domains/auth/hooks/useAuthAction";

import PrimaryButton from "@/components/atoms/button/PrimaryButton";
import DotLoader from "@/components/atoms/DotLoader";

interface HarvestInsightButtonProps {
  insightId: number;
}

const HarvestInsightButton = ({ insightId }: HarvestInsightButtonProps) => {
  const { data: insightStatus, isLoading } = useInsightStatus(insightId);

  const { mutate: harvestInsight, isPending } = useHarvestInsight({
    onSuccess: () => alert("오늘의 지식을 수확했어요!"),
  });

  const handleHarvestInsight = useAuthAction({ action: () => harvestInsight(insightId) });

  if (isLoading || isPending) {
    return <DotLoader />;
  }

  return (
    <PrimaryButton
      label={insightStatus?.isHarvested ? "이미 수확했어요!" : "수확하기"}
      disabled={insightStatus?.isHarvested}
      onClick={handleHarvestInsight}
    />
  );
};

export default HarvestInsightButton;
