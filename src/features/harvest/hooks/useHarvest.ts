import { useQueryClient, useMutation } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import PROGRESS_QUERY_KEYS from '@/features/progress/constants/query-key';

import HARVEST_QUERY_KEYS from '@/features/harvest/constants/query-key';
import harvest from '@/features/harvest/apis/bff/harvest';
import type { HarvestStatus } from '@/features/harvest/models/harvest-status';

interface UseHarvestParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useHarvest = ({ onSuccess, onError }: UseHarvestParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (insightId: string) => {
      const result = await harvest(insightId);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);
    },
    onSuccess: (_, insightId) => {
      queryClient.setQueryData<HarvestStatus>(HARVEST_QUERY_KEYS.STATUS(insightId), (prev) =>
        prev ? { ...prev, isHarvested: true } : prev,
      );
      queryClient.invalidateQueries({ queryKey: HARVEST_QUERY_KEYS.HARVESTED });
      queryClient.invalidateQueries({ queryKey: PROGRESS_QUERY_KEYS.MY });

      onSuccess?.();
    },
    onError,
  });
};

export default useHarvest;
