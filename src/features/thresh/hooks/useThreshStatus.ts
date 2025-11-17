import { useQuery } from '@tanstack/react-query';

import THRESH_QUERY_KEYS from '@/features/thresh/constants/queryKey';
import getThreshStatus from '@/features/thresh/usecases/getThreshStatus';
import { type ThreshStatusResponse } from '@/features/thresh/models/response/threshStatusResponse';

const useThreshStatus = (quizId: string) => {
  return useQuery<ThreshStatusResponse>({
    queryKey: THRESH_QUERY_KEYS.STATUS(quizId),
    queryFn: async () => await getThreshStatus(quizId),
  });
};

export default useThreshStatus;
