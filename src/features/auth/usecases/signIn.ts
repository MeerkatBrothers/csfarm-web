import { validateOrThrow } from '@/lib/utils/zod';
import ResultError from '@/lib/errors/resultError';

import signInRepository from '@/features/auth/repositories/signInRepository';
import { type SignInRequest } from '@/features/auth/models/request/signInRequest';
import { credentialFormSchema, type CredentialForm } from '@/features/auth/models/credentialForm';

const signIn = async (credentialForm: CredentialForm): Promise<void> => {
  const validatedCredentialForm = validateOrThrow(credentialFormSchema, credentialForm);
  const body: SignInRequest = { credential: validatedCredentialForm };

  const result = await signInRepository(body);
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }
};

export default signIn;
