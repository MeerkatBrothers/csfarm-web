import { type Token } from '@/features/auth/models/token';

export interface SignInResponse {
  token: Token;
}
