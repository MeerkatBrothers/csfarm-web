import { NextRequest, NextResponse } from 'next/server';

import { parsePathParam } from '@/lib/utils/parser/api';
import { BffContext, createBffHandler } from '@/lib/bff/handler';
import { getAccessTokenFromCookie } from '@/lib/cookie/accessToken';
import UnauthorizedError from '@/lib/errors/http/unauthorizedError';
import NotFoundError from '@/lib/errors/http/notFoundError';

import { INSIGHT_NOT_FOUND_ERROR } from '@/features/insight/constants/errorMessage';

import harvestStatusDatasource from '@/features/harvest/datasources/harvestStatusDatasource';
import { type HarvestStatusResponse } from '@/features/harvest/models/response/harvestStatusResponse';

const harvestStatusHandler = async (
  _: NextRequest,
  context: BffContext,
): Promise<HarvestStatusResponse> => {
  const params = context.params ?? {};
  const insightId = parsePathParam(params, 'insightId');
  if (!insightId) {
    throw new NotFoundError(INSIGHT_NOT_FOUND_ERROR);
  }

  const storedAccessToken = await getAccessTokenFromCookie();
  if (!storedAccessToken) {
    throw new UnauthorizedError();
  }

  const harvestStatus = await harvestStatusDatasource(insightId, storedAccessToken);

  return harvestStatus;
};

export const GET = createBffHandler(harvestStatusHandler);
