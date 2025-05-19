import { CredentialForm } from "@/domains/auth/models/fragments/credentialForm";
import { CredentialFormDto } from "@/domains/auth/dtos/fragments/credentialFormDto";

export const mapCredentialFormToDto = (form: CredentialForm): CredentialFormDto => {
  const { identifier, loginPlatform } = form;

  return {
    identifier: identifier.trim(),
    loginPlatform,
  };
};
