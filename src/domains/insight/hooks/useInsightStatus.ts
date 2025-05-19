"use client";

import { useQuery } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";
import getInsightStatus from "@/domains/insight/usecases/getInsightStatus";
import { InsightStatus } from "@/domains/insight/models/insightStatus";

const useInsightStatus = (insightId: number) => {
  return useQuery<InsightStatus>({
    queryKey: INSIGHT_QUERY_KEYS.STATUS(insightId),
    queryFn: async () => {
      const insightStatusResult: Result<InsightStatus> = await getInsightStatus(insightId);
      if (!insightStatusResult.ok) {
        throw new ResultError(insightStatusResult.message, insightStatusResult.statusCode);
      }

      return insightStatusResult.data;
    },
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
  });
};

export default useInsightStatus;
