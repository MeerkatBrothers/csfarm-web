import { useQueryClient, useMutation } from '@tanstack/react-query';

import { validateOrThrow } from '@/shared/utils/zod';
import ResultError from '@/shared/errors/client/result-error';

import signUp from '@/features/auth/api/bff/sign-up';
import { credentialFormSchema, type CredentialForm } from '@/features/auth/models/credential.form';

interface UseSignUpParams {
  onSuccess?: () => void;
  onError?: (error: Error, credentialForm: CredentialForm) => void;
}

const useSignUp = ({ onSuccess, onError }: UseSignUpParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentialForm: CredentialForm) => {
      const validatedForm = validateOrThrow(credentialFormSchema, credentialForm);

      const result = await signUp(validatedForm);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);
    },
    onSuccess: () => {
      queryClient.clear();

      onSuccess?.();
    },
    onError,
  });
};

export default useSignUp;
