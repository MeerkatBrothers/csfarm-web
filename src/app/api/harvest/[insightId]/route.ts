import { createBffHandler } from '@/shared/utils/bff';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';

import fetchHarvest from '@/features/harvest/apis/server/fetch-harvest';

interface HarvestContext {
  params: Promise<{ insightId: string }>;
}

const harvestHandler = async (_: Request, context: HarvestContext): Promise<null> => {
  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  const params = await context.params;
  const insightId = params.insightId;

  await fetchHarvest(insightId, storedAccessToken);

  return null;
};

export const POST = createBffHandler(harvestHandler);
