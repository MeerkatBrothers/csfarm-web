import { z } from "zod";

import { myInsightPreviewDtoSchema } from "@/domains/insight/dtos/fragments/myInsightPreviewDto";

export const harvestedInsightResDtoSchema = z.object({
  totalPage: z.number(),
  currentPage: z.number(),
  insights: z.array(myInsightPreviewDtoSchema),
});

export type HarvestedInsightResDto = z.infer<typeof harvestedInsightResDtoSchema>;
