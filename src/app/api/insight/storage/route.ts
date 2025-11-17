import { NextRequest } from 'next/server';

import { stringToNumber } from '@/lib/utils/transformer/number';
import { parseQueryParam } from '@/lib/utils/parser/api';
import { createBffHandler } from '@/lib/bff/handler';
import { type Paginated } from '@/lib/models/paginated';

import storedInsightsDatasource from '@/features/insight/datasources/storedInsightsDatasource';
import { type StoredInsightResponse } from '@/features/insight/models/response/storedInsightResponse';

const storedInsightsHandler = async (
  request: NextRequest,
): Promise<Paginated<StoredInsightResponse>> => {
  const url = new URL(request.url);
  const page = stringToNumber(parseQueryParam(url, 'page')) ?? 1;
  const size = stringToNumber(parseQueryParam(url, 'size')) ?? 10;

  const paginatedStoredInsights = await storedInsightsDatasource(page, size);

  return paginatedStoredInsights;
};

export const GET = createBffHandler(storedInsightsHandler);
