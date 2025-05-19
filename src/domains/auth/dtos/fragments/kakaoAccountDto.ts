import { z } from "zod";

export const kakaoAccountDtoSchema = z.object({
  email: z.string(),
  has_email: z.boolean(),
  email_needs_agreement: z.boolean(),
  is_email_valid: z.boolean(),
  is_email_verified: z.boolean(),
});

export type KakaoAccountDto = z.infer<typeof kakaoAccountDtoSchema>;
