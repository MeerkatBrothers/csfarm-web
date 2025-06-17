import { useQuery } from "@tanstack/react-query";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";
import getTodayInsight from "@/domains/insight/usecases/getTodayInsight";
import { TodayInsight } from "@/domains/insight/models/todayInsight";

const useTodayInsight = () => {
  return useQuery<TodayInsight>({
    queryKey: INSIGHT_QUERY_KEYS.TODAY(),
    queryFn: getTodayInsight,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    retry: false,
  });
};

export default useTodayInsight;
