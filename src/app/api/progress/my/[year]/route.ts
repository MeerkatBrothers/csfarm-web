import { createBffHandler } from '@/shared/utils/bff';
import { stringToNumber } from '@/shared/utils/transformer/number';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';

import fetchMyProgress from '@/features/progress/apis/server/fetch-my-progress';
import type { Progress } from '@/features/progress/models/progress';

interface MyProgressContext {
  params: Promise<{ year: string }>;
}

const myProgressHandler = async (_: Request, context: MyProgressContext): Promise<Progress[]> => {
  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  const params = await context.params;
  const year = stringToNumber(params.year, 2025);

  return await fetchMyProgress(year, storedAccessToken);
};

export const GET = createBffHandler(myProgressHandler);
