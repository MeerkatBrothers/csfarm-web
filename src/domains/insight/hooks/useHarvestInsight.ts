import { useQueryClient, useMutation } from "@tanstack/react-query";

import PROGRESS_QUERY_KEYS from "@/domains/progress/constants/queryKey";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";
import harvestInsight from "@/domains/insight/usecases/harvestInsight";
import { InsightStatus } from "@/domains/insight/models/insightStatus";

interface UseHarvestInsightParams {
  onSuccess?: () => void;
}

const useHarvestInsight = ({ onSuccess }: UseHarvestInsightParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (insightId: number) => await harvestInsight(insightId),
    onSuccess: (_, insightId) => {
      queryClient.setQueryData<InsightStatus>(INSIGHT_QUERY_KEYS.STATUS(insightId), (prev) =>
        prev ? { ...prev, isHarvested: true } : prev,
      );
      queryClient.invalidateQueries({ queryKey: INSIGHT_QUERY_KEYS.HARVESTED });
      queryClient.invalidateQueries({ queryKey: PROGRESS_QUERY_KEYS.MY });

      onSuccess?.();
    },
  });
};

export default useHarvestInsight;
