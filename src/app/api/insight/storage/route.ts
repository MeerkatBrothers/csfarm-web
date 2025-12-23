import { NextRequest } from 'next/server';

import { createBffHandler } from '@/shared/utils/bff';
import { parseQueryParam } from '@/shared/utils/parser/request';
import { stringToNumber } from '@/shared/utils/transformer/number';
import type { Paginated } from '@/shared/models/paginated';

import fetchStoredInsights from '@/features/insight/apis/server/fetch-stored-insights';
import type { InsightPreview } from '@/features/insight/models/insight.preview';

const storedInsightsHandler = async (request: NextRequest): Promise<Paginated<InsightPreview>> => {
  const url = new URL(request.url);
  const page = stringToNumber(parseQueryParam(url, 'page'), 1);
  const size = stringToNumber(parseQueryParam(url, 'size'), 10);

  return await fetchStoredInsights(page, size);
};

export const GET = createBffHandler(storedInsightsHandler);
