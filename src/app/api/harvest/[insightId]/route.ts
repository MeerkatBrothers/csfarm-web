import { createBffHandler, type BffContext } from '@/shared/utils/bff';
import { parsePathParamOrThrow } from '@/shared/utils/parser/request';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';

import fetchHarvest from '@/features/harvest/apis/server/fetch-harvest';

const harvestHandler = async (_: Request, context: BffContext): Promise<null> => {
  const params = context.params ?? {};
  const insightId = parsePathParamOrThrow(params, 'insightId');

  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  await fetchHarvest(insightId, storedAccessToken);

  return null;
};

export const POST = createBffHandler(harvestHandler);
