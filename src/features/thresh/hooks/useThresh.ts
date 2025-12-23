import { useQueryClient, useMutation } from '@tanstack/react-query';

import InvalidFormError from '@/shared/errors/client/invalid-form-error';
import ResultError from '@/shared/errors/client/result-error';

import HARVEST_QUERY_KEYS from '@/features/harvest/constants/query-key';

import PROGRESS_QUERY_KEYS from '@/features/progress/constants/queryKey';

import THRESH_QUERY_KEYS from '@/features/thresh/constants/query-key';
import { ThreshErrorCode } from '@/features/thresh/errors/thresh-error-code';
import thresh from '@/features/thresh/apis/bff/thresh';
import type { ThreshStatus } from '@/features/thresh/models/thresh-status';

interface ThreshQuizParams {
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
    mutationFn: async ({ quizId, choiceId }: ThreshQuizParams) => {
      if (choiceId === null) throw new InvalidFormError(ThreshErrorCode.CHOICE_NOT_SELECTED);

      const result = await thresh(quizId, choiceId);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);
    },
    onSuccess: (_, params) => {
      queryClient.setQueryData<ThreshStatus>(THRESH_QUERY_KEYS.STATUS(params.quizId), (prev) =>
        prev ? { ...prev, isThreshed: true } : prev,
      );
      queryClient.invalidateQueries({ queryKey: HARVEST_QUERY_KEYS.HARVESTED });
      queryClient.invalidateQueries({ queryKey: PROGRESS_QUERY_KEYS.MY });

      onSuccess?.();
    },
    onError,
  });
};

export default useThresh;
