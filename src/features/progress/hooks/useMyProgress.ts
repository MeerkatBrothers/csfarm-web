import { useQuery } from '@tanstack/react-query';

import { formatDateToYMD } from '@/shared/utils/formatter/date';
import ResultError from '@/shared/errors/client/result-error';

import PROGRESS_QUERY_KEYS from '@/features/progress/constants/query-key';
import getMyProgress from '@/features/progress/apis/bff/get-my-progress';
import type { Progress } from '@/features/progress/models/progress';

const useMyProgress = (year: number = 2025) => {
  return useQuery<Record<string, Progress>>({
    queryKey: [...PROGRESS_QUERY_KEYS.MY, year],
    queryFn: async () => {
      const result = await getMyProgress(year);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);

      const record: Record<string, Progress> = {};
      for (const progress of result.data) {
        record[formatDateToYMD(progress.date)] = progress;
      }

      return record;
    },
  });
};

export default useMyProgress;
