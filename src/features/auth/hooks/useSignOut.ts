import { useMutation, useQueryClient } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import signOut from '@/features/auth/api/bff/sign-out';

interface UseSignOutParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useSignOut = ({ onSuccess, onError }: UseSignOutParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const result = await signOut();
      if (!result.ok) throw new ResultError(result.statusCode, result.code);
    },
    onSuccess: () => {
      queryClient.clear();

      onSuccess?.();
    },
    onError,
  });
};

export default useSignOut;
