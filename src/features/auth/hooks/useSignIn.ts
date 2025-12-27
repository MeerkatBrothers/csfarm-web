import { useQueryClient, useMutation } from '@tanstack/react-query';

import { validateOrThrow } from '@/shared/utils/zod';
import ResultError from '@/shared/errors/client/result-error';

import useSignUp from '@/features/auth/hooks/useSignUp';
import signIn from '@/features/auth/api/bff/sign-in';
import { credentialFormSchema, type CredentialForm } from '@/features/auth/models/credential.form';

interface UseSignInParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useSignIn = ({ onSuccess, onError }: UseSignInParams = {}) => {
  const queryClient = useQueryClient();

  const { mutate: signUp } = useSignUp({
    onSuccess,
    onError,
  });

  return useMutation({
    mutationFn: async (credentialForm: CredentialForm) => {
      const validatedForm = validateOrThrow(credentialFormSchema, credentialForm);

      const result = await signIn(validatedForm);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);
    },
    onSuccess: () => {
      queryClient.clear();

      onSuccess?.();
    },
    onError: (error, credentialForm) => {
      if (error instanceof ResultError && error.statusCode === 401) {
        signUp(credentialForm);
      } else {
        onError?.(error);
      }
    },
  });
};

export default useSignIn;
