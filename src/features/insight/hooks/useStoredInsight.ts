import { useQuery } from '@tanstack/react-query';

import INSIGHT_QUERY_KEYS from '@/features/insight/constants/queryKey';
import getStoredInsight from '@/features/insight/usecases/getStoredInsight';
import { InsightPreview } from '@/features/insight/models/fragments/insightPreview';

const useStoredInsight = () => {
  return useQuery<Map<number, InsightPreview[]>>({
    queryKey: INSIGHT_QUERY_KEYS.STORED(),
    queryFn: getStoredInsight,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    retry: false,
  });
};

export default useStoredInsight;
