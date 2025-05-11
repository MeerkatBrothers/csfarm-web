import { z } from "zod";

import { insightSchema } from "@/domains/insight/models/fragments/insight";

export const insightDetailSchema = z.object({
  insight: insightSchema,
});

export type InsightDetail = z.infer<typeof insightDetailSchema>;
