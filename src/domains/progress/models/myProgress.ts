import { z } from "zod";

import { progressSchema } from "@/domains/progress/models/fragments/progress";

export const myProgressSchema = z.object({
  progresses: z.array(progressSchema),
});

export type MyProgress = z.infer<typeof myProgressSchema>;
