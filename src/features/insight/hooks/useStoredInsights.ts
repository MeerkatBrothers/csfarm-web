import { useInfiniteQuery } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';
import type { Paginated } from '@/shared/models/paginated';

import INSIGHT_QUERY_KEYS from '@/features/insight/constants/query-key';
import getStoredInsights from '@/features/insight/apis/bff/get-stored-insights';
import type { InsightPreview } from '@/features/insight/models/insight.preview';

const useStoredInsights = () => {
  return useInfiniteQuery<Paginated<InsightPreview>>({
    queryKey: INSIGHT_QUERY_KEYS.STORED,
    queryFn: async ({ pageParam = 1 }) => {
      const result = await getStoredInsights(pageParam as number, 10);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);

      return result.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.page + 1 : undefined),
  });
};

export default useStoredInsights;
