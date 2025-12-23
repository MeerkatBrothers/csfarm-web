import { useInfiniteQuery } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';
import type { Paginated } from '@/shared/models/paginated';

import HARVEST_QUERY_KEYS from '@/features/harvest/constants/query-key';
import getHarvestedInsights from '@/features/harvest/apis/bff/get-harvested-insights';
import type { HarvestedInsight } from '@/features/harvest/models/harvested-insight';

const useHarvestedInsights = () => {
  return useInfiniteQuery<Paginated<HarvestedInsight>>({
    queryKey: HARVEST_QUERY_KEYS.HARVESTED,
    queryFn: async ({ pageParam = 1 }) => {
      const result = await getHarvestedInsights(pageParam as number, 10);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);

      return result.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.page + 1 : undefined),
  });
};

export default useHarvestedInsights;
