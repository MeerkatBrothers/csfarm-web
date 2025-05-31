import { useQuery } from "@tanstack/react-query";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";
import getStoredInsight from "@/domains/insight/usecases/getStoredInsight";
import { InsightPreview } from "@/domains/insight/models/fragments/insightPreview";

const useStoredInsight = () => {
  return useQuery<Map<number, InsightPreview[]>>({
    queryKey: INSIGHT_QUERY_KEYS.STORED(),
    queryFn: async () => {
      const storedInsight: Map<number, InsightPreview[]> = await getStoredInsight();

      return storedInsight;
    },
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    retry: false,
  });
};

export default useStoredInsight;
