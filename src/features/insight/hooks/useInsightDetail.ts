import { useQuery } from '@tanstack/react-query';

import INSIGHT_QUERY_KEYS from '@/features/insight/constants/queryKey';
import getInsightDetail from '@/features/insight/usecases/getInsightDetail';
import { type InsightDetailResponse } from '@/features/insight/models/response/insightDetailResponse';

const useInsightDetail = (insightId: string) => {
  return useQuery<InsightDetailResponse>({
    queryKey: INSIGHT_QUERY_KEYS.DETAIL(insightId),
    queryFn: async () => await getInsightDetail(insightId),
  });
};

export default useInsightDetail;
