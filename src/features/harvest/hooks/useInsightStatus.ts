import { useQuery } from '@tanstack/react-query';

import INSIGHT_QUERY_KEYS from '@/features/insight/constants/queryKey';
import getInsightStatus from '@/features/insight/usecases/getInsightStatus';
import { InsightStatus } from '@/features/insight/models/insightStatus';

const useInsightStatus = (insightId: number) => {
  return useQuery<InsightStatus>({
    queryKey: INSIGHT_QUERY_KEYS.STATUS(insightId),
    queryFn: async () => await getInsightStatus(insightId),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    retry: false,
  });
};

export default useInsightStatus;
