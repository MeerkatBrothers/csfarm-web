import { createBffHandler, type BffContext } from '@/shared/utils/bff';
import { parsePathParamOrThrow } from '@/shared/utils/parser/request';

import fetchInsight from '@/features/insight/apis/server/fetch-insight';
import type { Insight } from '@/features/insight/models/insight';

const insightDetailHandler = async (_: Request, context: BffContext): Promise<Insight> => {
  const params = context.params ?? {};
  const insightId = parsePathParamOrThrow(params, 'insightId');

  return await fetchInsight(insightId);
};

export const GET = createBffHandler(insightDetailHandler);
