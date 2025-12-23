import { useQuery } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import THRESH_QUERY_KEYS from '@/features/thresh/constants/query-key';
import getThreshStatus from '@/features/thresh/apis/bff/get-thresh-status';
import type { ThreshStatus } from '@/features/thresh/models/thresh-status';

const useThreshStatus = (quizId: string) => {
  return useQuery<ThreshStatus>({
    queryKey: THRESH_QUERY_KEYS.STATUS(quizId),
    queryFn: async () => {
      const result = await getThreshStatus(quizId);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);

      return result.data;
    },
  });
};

export default useThreshStatus;
