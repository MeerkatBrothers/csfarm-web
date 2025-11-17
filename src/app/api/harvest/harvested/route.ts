import { NextRequest } from 'next/server';

import { stringToNumber } from '@/lib/utils/transformer/number';
import { parseQueryParam } from '@/lib/utils/parser/api';
import { createBffHandler } from '@/lib/bff/handler';
import { getAccessTokenFromCookie } from '@/lib/cookie/accessToken';
import UnauthorizedError from '@/lib/errors/http/unauthorizedError';
import { type Paginated } from '@/lib/models/paginated';

import harvestedInsightsDatasource from '@/features/harvest/datasources/harvestedInsightsDatasource';
import { type HarvestedInsightResponse } from '@/features/harvest/models/response/harvestedInsightResponse';

const harvestedInsightsHandler = async (
  request: NextRequest,
): Promise<Paginated<HarvestedInsightResponse>> => {
  const url = new URL(request.url);
  const page = stringToNumber(parseQueryParam(url, 'page')) ?? 1;
  const size = stringToNumber(parseQueryParam(url, 'size')) ?? 10;

  const storedAccessToken = await getAccessTokenFromCookie();
  if (!storedAccessToken) {
    throw new UnauthorizedError();
  }

  const paginatedHarvestedInsights = await harvestedInsightsDatasource(
    page,
    size,
    storedAccessToken,
  );

  return paginatedHarvestedInsights;
};

export const GET = createBffHandler(harvestedInsightsHandler);
