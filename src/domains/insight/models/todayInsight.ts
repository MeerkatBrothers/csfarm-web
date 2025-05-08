import { z } from "zod";

import { insightSchema } from "@/domains/insight/models/fragments/insight";

export const todayInsightSchema = z.object({
  insight: insightSchema,
  isHarvested: z.boolean(),
  harvestedAt: z.coerce.date(),
});

export type TodayInsight = z.infer<typeof todayInsightSchema>;
