import { createBffHandler } from '@/shared/utils/bff';

import fetchInsight from '@/features/insight/apis/server/fetch-insight';
import type { Insight } from '@/features/insight/models/insight';

interface InsightDetailContext {
  params: Promise<{ insightId: string }>;
}

const insightDetailHandler = async (
  _: Request,
  context: InsightDetailContext,
): Promise<Insight> => {
  const params = await context.params;
  const insightId = params.insightId;

  return await fetchInsight(insightId);
};

export const GET = createBffHandler(insightDetailHandler);
