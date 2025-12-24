import { createBffHandler, type BffContext } from '@/shared/utils/bff';
import { parsePathParam } from '@/shared/utils/parser/request';
import { stringToNumber } from '@/shared/utils/transformer/number';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';

import fetchMyProgress from '@/features/progress/apis/server/fetch-my-progress';
import type { Progress } from '@/features/progress/models/progress';

const myProgressHandler = async (_: Request, context: BffContext): Promise<Progress[]> => {
  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  const params = context.params ?? {};
  const year = stringToNumber(parsePathParam(params, 'year'), 2025);

  return await fetchMyProgress(year, storedAccessToken);
};

export const GET = createBffHandler(myProgressHandler);
