import { useQuery } from '@tanstack/react-query';

import INSIGHT_QUERY_KEYS from '@/features/insight/constants/queryKey';
import getInsightDetail from '@/features/insight/usecases/getInsightDetail';
import { InsightDetail } from '@/features/insight/models/insightDetail';

const useInsightDetail = (insightId: number) => {
  return useQuery<InsightDetail>({
    queryKey: INSIGHT_QUERY_KEYS.DETAIL(insightId),
    queryFn: async () => await getInsightDetail(insightId),
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    retry: false,
  });
};

export default useInsightDetail;
