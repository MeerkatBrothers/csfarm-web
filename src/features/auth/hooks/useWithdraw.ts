import { useMutation, useQueryClient } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import withdraw from '@/features/auth/api/bff/withdraw';

interface UseWithdrawParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useWithdraw = ({ onSuccess, onError }: UseWithdrawParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const result = await withdraw();
      if (!result.ok) throw new ResultError(result.statusCode, result.code);
    },
    onSuccess: () => {
      queryClient.clear();

      onSuccess?.();
    },
    onError,
  });
};

export default useWithdraw;
