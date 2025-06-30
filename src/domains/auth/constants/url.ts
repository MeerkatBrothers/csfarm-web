export const KAKAO_AUTH_URL: string = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`;
export const KAKAO_TOKEN_URL: string = "https://kauth.kakao.com/oauth/token";
export const KAKAO_ACCOUNT_URL: string = "https://kapi.kakao.com/v2/user/me";
