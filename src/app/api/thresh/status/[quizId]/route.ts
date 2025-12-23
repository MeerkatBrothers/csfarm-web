import { createBffHandler, type BffContext } from '@/shared/utils/bff';
import { parsePathParamOrThrow } from '@/shared/utils/parser/request';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';

import fetchThreshStatus from '@/features/thresh/apis/server/fetch-thresh-status';
import type { ThreshStatus } from '@/features/thresh/models/thresh-status';

const threshStatusHandler = async (_: Request, context: BffContext): Promise<ThreshStatus> => {
  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  const params = context.params ?? {};
  const quizId = parsePathParamOrThrow(params, 'quizId');

  return await fetchThreshStatus(quizId, storedAccessToken);
};

export const GET = createBffHandler(threshStatusHandler);
