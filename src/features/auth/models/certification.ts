import type { Token } from '@/features/auth/models/token';

export interface Certification {
  deviceId: string;
  token: Token;
}
