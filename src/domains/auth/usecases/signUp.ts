import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ResultError from "@/lib/errors/resultError";

import signUpRepo from "@/domains/auth/repositories/signUpRepo";
import { mapCredentialFormToDto } from "@/domains/auth/mappers/fragments/credentialFormMapper";
import { CredentialForm } from "@/domains/auth/models/fragments/credentialForm";
import { SignUpReqDto, signUpReqDtoSchema } from "@/domains/auth/dtos/request/signUpReqDto";
import { CredentialFormDto } from "@/domains/auth/dtos/fragments/credentialFormDto";

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
