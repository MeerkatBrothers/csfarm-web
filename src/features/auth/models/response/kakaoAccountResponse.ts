import { type KakaoAccount } from '@/features/auth/models/kakaoAccount';

export interface KakaoAccountResponse {
  id: number;
  kakao_account: KakaoAccount;
  connected_at: Date;
}
