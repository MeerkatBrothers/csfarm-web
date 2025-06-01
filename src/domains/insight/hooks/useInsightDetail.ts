import { useQuery } from "@tanstack/react-query";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";
import getInsightDetail from "@/domains/insight/usecases/getInsightDetail";
import { InsightDetail } from "@/domains/insight/models/insightDetail";

const useInsightDetail = (insightId: number) => {
  return useQuery<InsightDetail>({
    queryKey: INSIGHT_QUERY_KEYS.DETAIL(insightId),
    queryFn: async () => {
      const insightDetail: InsightDetail = await getInsightDetail(insightId);

      return insightDetail;
    },
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    retry: false,
  });
};

export default useInsightDetail;
