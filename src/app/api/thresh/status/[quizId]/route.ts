import { createBffHandler, type BffContext } from '@/shared/utils/bff';
import { parsePathParamOrThrow } from '@/shared/utils/parser/request';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';

import fetchThreshStatus from '@/features/thresh/apis/server/fetch-thresh-status';
import type { ThreshStatus } from '@/features/thresh/models/thresh-status';

const threshStatusHandler = async (_: Request, context: BffContext): Promise<ThreshStatus> => {
  const params = context.params ?? {};
  const quizId = parsePathParamOrThrow(params, 'quizId');

  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  return await fetchThreshStatus(quizId, storedAccessToken);
};

export const GET = createBffHandler(threshStatusHandler);
