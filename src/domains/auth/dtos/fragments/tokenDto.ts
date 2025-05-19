import { z } from "zod";

export const tokenDtoSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type TokenDto = z.infer<typeof tokenDtoSchema>;
