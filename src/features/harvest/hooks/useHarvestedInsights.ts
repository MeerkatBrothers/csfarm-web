import { useInfiniteQuery } from '@tanstack/react-query';

import { type Paginated } from '@/lib/models/paginated';

import HARVEST_QUERY_KEYS from '@/features/harvest/constants/queryKey';
import getHarvestedInsights from '@/features/harvest/usecases/getHarvestedInsights';
import { type HarvestedInsightResponse } from '@/features/harvest/models/response/harvestedInsightResponse';

const useHarvestedInsights = () => {
  return useInfiniteQuery<Paginated<HarvestedInsightResponse>>({
    queryKey: HARVEST_QUERY_KEYS.HARVESTED,
    queryFn: async ({ pageParam = 1 }) => getHarvestedInsights(pageParam as number, 10),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.page + 1 : undefined;
    },
  });
};

export default useHarvestedInsights;
