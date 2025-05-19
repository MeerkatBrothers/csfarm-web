"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";
import harvestInsight from "@/domains/insight/usecases/harvestInsight";
import { InsightStatus } from "@/domains/insight/models/insightStatus";

interface UseHarvestInsightParams {
  onSuccess?: () => void;
  onError?: (error: Error, insightId: number) => void;
}

const useHarvestInsight = ({ onSuccess, onError }: UseHarvestInsightParams) => {
  const queryClient = useQueryClient();

  const updateInsightStatusCache = (insightId: number): void => {
    queryClient.setQueryData<InsightStatus>(INSIGHT_QUERY_KEYS.STATUS(insightId), (prev) => (prev ? { ...prev, isHarvested: true } : prev));
  };

  const invalidateHarvestedInsightCache = (): void => {
    queryClient.invalidateQueries({ queryKey: INSIGHT_QUERY_KEYS.HARVESTED });
  };

  return useMutation({
    mutationFn: async (insightId: number) => {
      const harvestInsightResult: Result<null> = await harvestInsight(insightId);
      if (!harvestInsightResult.ok) {
        throw new ResultError(harvestInsightResult.message, harvestInsightResult.statusCode);
      }
    },
    onSuccess: (_, insightId) => {
      updateInsightStatusCache(insightId);
      invalidateHarvestedInsightCache();

      onSuccess?.();
    },
    onError: (error, insightId) => {
      onError?.(error, insightId);
    },
  });
};

export default useHarvestInsight;
