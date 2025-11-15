import { z } from "zod";

export const kakaoTokenResDtoSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
  token_type: z.string(),
  scope: z.string(),
  expires_in: z.number(),
  refresh_token_expires_in: z.number(),
});

export type KakaoTokenResDto = z.infer<typeof kakaoTokenResDtoSchema>;
