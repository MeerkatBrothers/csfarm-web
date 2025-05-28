import { useInfiniteQuery } from "@tanstack/react-query";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";
import getHarvestedInsight from "@/domains/insight/usecases/getHarvestedInsight";
import { HarvestedInsight } from "@/domains/insight/models/harvestedInsight";
import { MyInsightPreview } from "@/domains/insight/models/fragments/myInsightPreview";

const useHarvestedInsight = () => {
  return useInfiniteQuery<MyInsightPreview[]>({
    queryKey: INSIGHT_QUERY_KEYS.HARVESTED,
    queryFn: async ({ pageParam }) => {
      const harvestedInsight: HarvestedInsight = await getHarvestedInsight(pageParam as number);

      return harvestedInsight.insights;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
  });
};

export default useHarvestedInsight;
