import { useMutation, useQueryClient } from '@tanstack/react-query';

import PROGRESS_QUERY_KEYS from '@/features/progress/constants/queryKey';

import HARVEST_QUERY_KEYS from '@/features/harvest/constants/queryKey';
import harvest from '@/features/harvest/usecases/harvest';
import { type HarvestStatusResponse } from '@/features/harvest/models/response/harvestStatusResponse';

interface UseHarvestInsightParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useHarvest = ({ onSuccess, onError }: UseHarvestInsightParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (insightId: string) => await harvest(insightId),
    onSuccess: (_, insightId) => {
      queryClient.setQueryData<HarvestStatusResponse>(
        HARVEST_QUERY_KEYS.STATUS(insightId),
        (prev) => (prev ? { ...prev, isHarvested: true } : prev),
      );

      queryClient.invalidateQueries({ queryKey: HARVEST_QUERY_KEYS.HARVESTED });
      queryClient.invalidateQueries({ queryKey: PROGRESS_QUERY_KEYS.MY });

      onSuccess?.();
    },
    onError,
  });
};

export default useHarvest;
