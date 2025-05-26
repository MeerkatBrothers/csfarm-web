"use client";

import { useQuery } from "@tanstack/react-query";

import PROGRESS_QUERY_KEYS from "@/domains/progress/constants/queryKey";
import getMyProgress from "@/domains/progress/usecases/getMyProgress";
import { MyProgress } from "@/domains/progress/models/myProgress";

const useMyProgress = () => {
  return useQuery<MyProgress>({
    queryKey: PROGRESS_QUERY_KEYS.MY,
    queryFn: async () => {
      const myProgress: MyProgress = await getMyProgress();

      return myProgress;
    },
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
  });
};

export default useMyProgress;
