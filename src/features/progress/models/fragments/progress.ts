import { z } from "zod";

export const progressSchema = z.object({
  isHarvested: z.boolean(),
  isThreshed: z.boolean(),
  date: z.coerce.date(),
});

export type Progress = z.infer<typeof progressSchema>;
