import { Result } from '@/lib/types/result';
import { validateOrThrow } from '@/lib/utils/zod';
import ResultError from '@/lib/errors/resultError';

import signUpRepo from '@/features/auth/repositories/signUpRepo';
import { mapCredentialFormToDto } from '@/features/auth/mappers/fragments/credentialFormMapper';
import { CredentialForm } from '@/features/auth/models/fragments/credentialForm';
import { SignUpReqDto, signUpReqDtoSchema } from '@/features/auth/dtos/request/signUpReqDto';
import { CredentialFormDto } from '@/features/auth/dtos/fragments/credentialFormDto';

const signUp = async (credentialForm: CredentialForm): Promise<void> => {
  const credentialFormDto: CredentialFormDto = mapCredentialFormToDto(credentialForm);

  const requestBody: SignUpReqDto = { credential: credentialFormDto };
  const validatedRequestBody: SignUpReqDto = validateOrThrow(signUpReqDtoSchema, requestBody);

  const result: Result<null> = await signUpRepo(validatedRequestBody);
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }
};

export default signUp;
