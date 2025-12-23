import { createBffHandler, type BffContext } from '@/shared/utils/bff';
import { parsePathParamOrThrow } from '@/shared/utils/parser/request';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';

import fetchHarvestStatus from '@/features/harvest/apis/server/fetch-harvest-status';
import type { HarvestStatus } from '@/features/harvest/models/harvest-status';

const harvestStatusHandler = async (_: Request, context: BffContext): Promise<HarvestStatus> => {
  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  const params = context.params ?? {};
  const insightId = parsePathParamOrThrow(params, 'insightId');

  return await fetchHarvestStatus(insightId, storedAccessToken);
};

export const GET = createBffHandler(harvestStatusHandler);
