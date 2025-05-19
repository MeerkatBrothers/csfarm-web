"use client";

import { useQuery } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import PROGRESS_QUERY_KEYS from "@/domains/progress/constants/queryKey";
import getMyProgress from "@/domains/progress/usecases/getMyProgress";
import { MyProgress } from "@/domains/progress/models/myProgress";

const useMyProgress = () => {
  return useQuery<MyProgress>({
    queryKey: PROGRESS_QUERY_KEYS.MY,
    queryFn: async () => {
      const myProgressResult: Result<MyProgress> = await getMyProgress();
      if (!myProgressResult.ok) {
        throw new ResultError(myProgressResult.message, myProgressResult.statusCode);
      }

      return myProgressResult.data;
    },
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
  });
};

export default useMyProgress;
