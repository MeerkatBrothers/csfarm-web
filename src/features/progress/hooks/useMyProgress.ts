import { useQuery } from '@tanstack/react-query';

import PROGRESS_QUERY_KEYS from '@/features/progress/constants/queryKey';
import getMyProgress from '@/features/progress/usecases/getMyProgress';
import { Progress } from '@/features/progress/models/fragments/progress';

const useMyProgress = () => {
  return useQuery<Map<string, Progress>>({
    queryKey: PROGRESS_QUERY_KEYS.MY,
    queryFn: getMyProgress,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    retry: false,
  });
};

export default useMyProgress;
