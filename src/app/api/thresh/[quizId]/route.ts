import { createBffHandler, type BffContext } from '@/shared/utils/bff';
import { parsePathParamOrThrow, parseQueryParamOrThrow } from '@/shared/utils/parser/request';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';

import fetchThresh from '@/features/thresh/apis/server/fetch-thresh';

const threshHandler = async (request: Request, context: BffContext): Promise<null> => {
  const params = context.params ?? {};
  const quizId = parsePathParamOrThrow(params, 'quizId');

  const url = new URL(request.url);
  const choiceId = parseQueryParamOrThrow(url, 'choiceId');

  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  await fetchThresh(quizId, choiceId, storedAccessToken);

  return null;
};

export const POST = createBffHandler(threshHandler);
