export interface KakaoAccount {
  id: number;
  kakao_account: {
    email: string;
    has_email: boolean;
    email_needs_agreement: boolean;
    is_email_valid: boolean;
    is_email_verified: boolean;
  };
  connected_at: Date;
}
