import { useQuery } from '@tanstack/react-query';

import PROGRESS_QUERY_KEYS from '@/features/progress/constants/queryKey';
import getMyProgress from '@/features/progress/usecases/getMyProgress';
import { type Progress } from '@/features/progress/models/progress';

const useMyProgress = () => {
  return useQuery<Map<string, Progress>>({
    queryKey: PROGRESS_QUERY_KEYS.MY,
    queryFn: getMyProgress,
  });
};

export default useMyProgress;
