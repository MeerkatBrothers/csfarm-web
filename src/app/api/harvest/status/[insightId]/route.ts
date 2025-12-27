import { createBffHandler } from '@/shared/utils/bff';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';

import fetchHarvestStatus from '@/features/harvest/apis/server/fetch-harvest-status';
import type { HarvestStatus } from '@/features/harvest/models/harvest-status';

interface HarvestStatusContext {
  params: Promise<{ insightId: string }>;
}

const harvestStatusHandler = async (
  _: Request,
  context: HarvestStatusContext,
): Promise<HarvestStatus> => {
  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  const params = await context.params;
  const insightId = params.insightId;

  return await fetchHarvestStatus(insightId, storedAccessToken);
};

export const GET = createBffHandler(harvestStatusHandler);
