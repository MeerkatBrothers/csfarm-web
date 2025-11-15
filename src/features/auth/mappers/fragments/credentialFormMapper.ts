import { CredentialForm } from '@/features/auth/models/fragments/credentialForm';
import { CredentialFormDto } from '@/features/auth/dtos/fragments/credentialFormDto';

export const mapCredentialFormToDto = (form: CredentialForm): CredentialFormDto => {
  const { identifier, loginPlatform } = form;

  return {
    identifier: identifier.trim(),
    loginPlatform,
  };
};
