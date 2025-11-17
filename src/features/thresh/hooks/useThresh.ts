import { useQueryClient, useMutation } from '@tanstack/react-query';

import InvalidFormError from '@/lib/errors/invalidFormError';

import HARVEST_QUERY_KEYS from '@/features/harvest/constants/queryKey';

import PROGRESS_QUERY_KEYS from '@/features/progress/constants/queryKey';

import { CHOICE_NOT_SELECTED_ERROR } from '@/features/thresh/constants/errorMessage';

import thresh from '@/features/thresh/usecases/thresh';
import { type ThreshStatusResponse } from '@/features/thresh/models/response/threshStatusResponse';

interface ThreshParams {
  quizId: string;
  choiceId: string | null;
}

interface UseThreshParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useThresh = ({ onSuccess, onError }: UseThreshParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ quizId, choiceId }: ThreshParams) => {
      if (choiceId === null) {
        throw new InvalidFormError(CHOICE_NOT_SELECTED_ERROR);
      }

      await thresh(quizId, choiceId);
    },
    onSuccess: (_, params) => {
      queryClient.setQueryData<ThreshStatusResponse>(
        HARVEST_QUERY_KEYS.STATUS(params.quizId),
        (prev) => (prev ? { ...prev, isThreshed: true } : prev),
      );

      queryClient.invalidateQueries({ queryKey: HARVEST_QUERY_KEYS.HARVESTED });
      queryClient.invalidateQueries({ queryKey: PROGRESS_QUERY_KEYS.MY });

      onSuccess?.();
    },
    onError,
  });
};

export default useThresh;
