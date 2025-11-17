import { useQuery } from '@tanstack/react-query';

import INSIGHT_QUERY_KEYS from '@/features/insight/constants/queryKey';
import getTodayInsight from '@/features/insight/usecases/getTodayInsight';
import { type TodayInsightResponse } from '@/features/insight/models/response/todayInsightResponse';

const useTodayInsight = () => {
  return useQuery<TodayInsightResponse>({
    queryKey: INSIGHT_QUERY_KEYS.TODAY(),
    queryFn: getTodayInsight,
  });
};

export default useTodayInsight;
