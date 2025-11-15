import { z } from "zod";

export const progressDtoSchema = z.object({
  isHarvested: z.boolean(),
  isThreshed: z.boolean(),
  date: z.coerce.date(),
});

export type ProgressDto = z.infer<typeof progressDtoSchema>;
