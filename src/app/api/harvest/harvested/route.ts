import { NextRequest } from 'next/server';

import { createBffHandler } from '@/shared/utils/bff';
import { parseQueryParam } from '@/shared/utils/parser/request';
import { stringToNumber } from '@/shared/utils/transformer/number';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';
import type { Paginated } from '@/shared/models/paginated';

import fetchHarvestedInsights from '@/features/harvest/apis/server/fetch-harvested-insights';
import type { HarvestedInsight } from '@/features/harvest/models/harvested-insight';

const harvestedInsightsHandler = async (
  request: NextRequest,
): Promise<Paginated<HarvestedInsight>> => {
  const url = new URL(request.url);
  const page = stringToNumber(parseQueryParam(url, 'page'), 1);
  const size = stringToNumber(parseQueryParam(url, 'size'), 10);

  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  return await fetchHarvestedInsights(page, size, storedAccessToken);
};

export const GET = createBffHandler(harvestedInsightsHandler);
