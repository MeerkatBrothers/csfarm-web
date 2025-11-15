import { Result } from '@/lib/types/result';
import { validateOrThrow } from '@/lib/utils/zod';
import ResultError from '@/lib/errors/resultError';

import signInRepo from '@/features/auth/repositories/signInRepo';
import { mapCredentialFormToDto } from '@/features/auth/mappers/fragments/credentialFormMapper';
import { CredentialForm } from '@/features/auth/models/fragments/credentialForm';
import { SignInReqDto, signInReqDtoSchema } from '@/features/auth/dtos/request/signInReqDto';
import { CredentialFormDto } from '@/features/auth/dtos/fragments/credentialFormDto';

const signIn = async (credentialForm: CredentialForm): Promise<void> => {
  const credentialFormDto: CredentialFormDto = mapCredentialFormToDto(credentialForm);

  const requestBody: SignInReqDto = { credential: credentialFormDto };
  const validatedRequestBody: SignInReqDto = validateOrThrow(signInReqDtoSchema, requestBody);

  const result: Result<null> = await signInRepo(validatedRequestBody);
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }
};

export default signIn;
