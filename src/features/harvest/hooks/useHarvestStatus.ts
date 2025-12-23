import { useQuery } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import HARVEST_QUERY_KEYS from '@/features/harvest/constants/query-key';
import getHarvestStatus from '@/features/harvest/apis/bff/get-harvest-status';
import type { HarvestStatus } from '@/features/harvest/models/harvest-status';

const useHarvestStatus = (insightId: string) => {
  return useQuery<HarvestStatus>({
    queryKey: HARVEST_QUERY_KEYS.STATUS(insightId),
    queryFn: async () => {
      const result = await getHarvestStatus(insightId);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);

      return result.data;
    },
  });
};

export default useHarvestStatus;
