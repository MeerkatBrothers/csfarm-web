"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";
import harvestInsight from "@/domains/insight/usecases/harvestInsight";
import { TodayInsight } from "@/domains/insight/models/todayInsight";

interface UseHarvestInsightParams {
  onSuccess?: () => void;
  onError?: (error: Error, variables: number) => void;
}

const useHarvestInsight = ({ onSuccess, onError }: UseHarvestInsightParams) => {
  const queryClient = useQueryClient();

  const updateTodayInsightCache = (): void => {
    queryClient.setQueryData<TodayInsight>(INSIGHT_QUERY_KEYS.TODAY, (prev) => (prev ? { ...prev, isHarvested: true } : prev));
  };

  const invalidateHarvestedInsight = (): void => {
    queryClient.invalidateQueries({ queryKey: INSIGHT_QUERY_KEYS.HARVESTED });
  };

  return useMutation({
    mutationFn: async (insightId: number) => {
      await harvestInsight(insightId);
    },
    onSuccess: () => {
      updateTodayInsightCache();
      invalidateHarvestedInsight();

      onSuccess?.();
    },
    onError: (error, variables) => {
      onError?.(error, variables);
    },
  });
};

export default useHarvestInsight;
