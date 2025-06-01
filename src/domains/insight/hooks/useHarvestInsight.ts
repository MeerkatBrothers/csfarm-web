import { useQueryClient, useMutation } from "@tanstack/react-query";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";
import harvestInsight from "@/domains/insight/usecases/harvestInsight";
import { InsightStatus } from "@/domains/insight/models/insightStatus";

interface UseHarvestInsightParams {
  onSuccess?: () => void;
}

const useHarvestInsight = ({ onSuccess }: UseHarvestInsightParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (insightId: number) => {
      await harvestInsight(insightId);
    },
    onSuccess: (_, variables) => {
      queryClient.setQueryData<InsightStatus>(INSIGHT_QUERY_KEYS.STATUS(variables), (prev) =>
        prev ? { ...prev, isHarvested: true } : prev,
      );
      queryClient.invalidateQueries({ queryKey: INSIGHT_QUERY_KEYS.HARVESTED });

      onSuccess?.();
    },
  });
};

export default useHarvestInsight;
