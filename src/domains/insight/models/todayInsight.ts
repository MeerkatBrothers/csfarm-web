import { z } from "zod";

import { insightSchema } from "@/domains/insight/models/fragments/insight";

export const todayInsightSchema = z.object({
  insight: insightSchema,
});

export type TodayInsight = z.infer<typeof todayInsightSchema>;
