import { createBffHandler } from '@/shared/utils/bff';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';

import fetchThreshStatus from '@/features/thresh/apis/server/fetch-thresh-status';
import type { ThreshStatus } from '@/features/thresh/models/thresh-status';

interface ThreshStatusContext {
  params: Promise<{ quizId: string }>;
}

const threshStatusHandler = async (
  _: Request,
  context: ThreshStatusContext,
): Promise<ThreshStatus> => {
  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  const params = await context.params;
  const quizId = params.quizId;

  return await fetchThreshStatus(quizId, storedAccessToken);
};

export const GET = createBffHandler(threshStatusHandler);
