import { useQuery } from "@tanstack/react-query";

import PROGRESS_QUERY_KEYS from "@/domains/progress/constants/queryKey";
import getMyProgress from "@/domains/progress/usecases/getMyProgress";
import { Progress } from "@/domains/progress/models/fragments/progress";

const useMyProgress = () => {
  return useQuery<Map<string, Progress>>({
    queryKey: PROGRESS_QUERY_KEYS.MY,
    queryFn: async () => {
      const myProgress: Map<string, Progress> = await getMyProgress();

      return myProgress;
    },
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    retry: false,
  });
};

export default useMyProgress;
