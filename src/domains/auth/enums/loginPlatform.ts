export const LOGIN_PLATFORM = {
  KAKAO: "kakao",
} as const;

export type LoginPlatform =
  (typeof LOGIN_PLATFORM)[keyof typeof LOGIN_PLATFORM];
