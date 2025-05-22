import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ResultError from "@/lib/errors/resultError";

import signInRepo from "@/domains/auth/repositories/signInRepo";
import { mapCredentialFormToDto } from "@/domains/auth/mappers/fragments/credentialFormMapper";
import { CredentialForm } from "@/domains/auth/models/fragments/credentialForm";
import { SignInReqDto, signInReqDtoSchema } from "@/domains/auth/dtos/request/signInReqDto";
import { CredentialFormDto } from "@/domains/auth/dtos/fragments/credentialFormDto";

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
