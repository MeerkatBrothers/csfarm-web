import { type CredentialForm } from '@/features/auth/models/credentialForm';

export interface SignInRequest {
  credential: CredentialForm;
}
