import { validateOrThrow } from '@/lib/utils/zod';
import ResultError from '@/lib/errors/resultError';

import signUpRepository from '@/features/auth/repositories/signUpRepository';
import { type SignUpRequest } from '@/features/auth/models/request/signUpRequest';
import { credentialFormSchema, type CredentialForm } from '@/features/auth/models/credentialForm';

const signUp = async (credentialForm: CredentialForm): Promise<void> => {
  const validatedCredentialForm = validateOrThrow(credentialFormSchema, credentialForm);
  const body: SignUpRequest = { credential: validatedCredentialForm };

  const result = await signUpRepository(body);
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }
};

export default signUp;
