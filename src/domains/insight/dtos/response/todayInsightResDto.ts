import { z } from "zod";

import { insightDtoSchema } from "@/domains/insight/dtos/fragments/insightDto";

export const todayInsightResDtoSchema = z.object({
  insight: insightDtoSchema,
  isHarvested: z.boolean(),
  harvestedAt: z.coerce.date(),
});

export type TodayInsightResDto = z.infer<typeof todayInsightResDtoSchema>;
