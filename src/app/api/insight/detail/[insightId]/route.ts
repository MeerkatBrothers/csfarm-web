import { NextRequest } from 'next/server';

import { createBffHandler, type BffContext } from '@/lib/bff/handler';
import { parsePathParam } from '@/lib/utils/parser/api';
import NotFoundError from '@/lib/errors/http/notFoundError';

import { INSIGHT_NOT_FOUND_ERROR } from '@/features/insight/constants/errorMessage';
import insightDetailDatasource from '@/features/insight/datasources/insightDetailDatasource';
import { type InsightDetailResponse } from '@/features/insight/models/response/insightDetailResponse';

const insightDetailHandler = async (
  _: NextRequest,
  context: BffContext,
): Promise<InsightDetailResponse> => {
  const params = context.params ?? {};
  const insightId = parsePathParam(params, 'insightId');
  if (!insightId) {
    throw new NotFoundError(INSIGHT_NOT_FOUND_ERROR);
  }

  const insightDetail = await insightDetailDatasource(insightId);

  return insightDetail;
};

export const GET = createBffHandler(insightDetailHandler);
