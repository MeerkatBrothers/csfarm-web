import { NextRequest } from 'next/server';

import { createBffHandler } from '@/shared/utils/bff';
import { parseQueryParamOrThrow } from '@/shared/utils/parser/request';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';

import fetchThresh from '@/features/thresh/apis/server/fetch-thresh';

interface ThreshContext {
  params: Promise<{ quizId: string }>;
}

const threshHandler = async (request: NextRequest, context: ThreshContext): Promise<null> => {
  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  const params = await context.params;
  const quizId = params.quizId;

  const url = new URL(request.url);
  const choiceId = parseQueryParamOrThrow(url, 'choiceId');

  await fetchThresh(quizId, choiceId, storedAccessToken);

  return null;
};

export const POST = createBffHandler(threshHandler);
