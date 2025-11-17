import { useInfiniteQuery } from '@tanstack/react-query';

import { type Paginated } from '@/lib/models/paginated';

import INSIGHT_QUERY_KEYS from '@/features/insight/constants/queryKey';
import getStoredInsights from '@/features/insight/usecases/getStoredInsights';
import { type StoredInsightResponse } from '@/features/insight/models/response/storedInsightResponse';

const useStoredInsight = () => {
  return useInfiniteQuery<Paginated<StoredInsightResponse>>({
    queryKey: INSIGHT_QUERY_KEYS.STORED,
    queryFn: ({ pageParam = 1 }) => getStoredInsights(pageParam as number, 10),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.page + 1 : undefined;
    },
  });
};

export default useStoredInsight;
