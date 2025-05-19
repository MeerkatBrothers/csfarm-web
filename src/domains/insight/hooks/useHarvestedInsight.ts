"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";
import getHarvestedInsight from "@/domains/insight/usecases/getHarvestedInsight";
import { HarvestedInsight } from "@/domains/insight/models/harvestedInsight";
import { MyInsightPreview } from "@/domains/insight/models/fragments/myInsightPreview";

const useHarvestedInsight = () => {
  return useInfiniteQuery<MyInsightPreview[]>({
    queryKey: INSIGHT_QUERY_KEYS.HARVESTED,
    queryFn: async ({ pageParam }) => {
      const harvestedInsightResult: Result<HarvestedInsight> = await getHarvestedInsight(pageParam as number);
      if (!harvestedInsightResult.ok) {
        throw new ResultError(harvestedInsightResult.message, harvestedInsightResult.statusCode);
      }

      return harvestedInsightResult.data.insights;
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
