import { CredentialForm } from "@/domains/auth/models/form/credential";
import { CredentialDto } from "@/domains/auth/dtos/credentialDto";

export const mapCredentialFormToDto = (form: CredentialForm): CredentialDto => {
  const { identifier, loginPlatform } = form;

  return {
    identifier: identifier.trim(),
    loginPlatform,
  };
};
