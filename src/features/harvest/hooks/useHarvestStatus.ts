import { useQuery } from '@tanstack/react-query';

import HARVEST_QUERY_KEYS from '@/features/harvest/constants/queryKey';
import getHarvestStatus from '@/features/harvest/usecases/getHarvestStatus';
import { type HarvestStatusResponse } from '@/features/harvest/models/response/harvestStatusResponse';

const useHarvestStatus = (insightId: string) => {
  return useQuery<HarvestStatusResponse>({
    queryKey: HARVEST_QUERY_KEYS.STATUS(insightId),
    queryFn: async () => await getHarvestStatus(insightId),
  });
};

export default useHarvestStatus;
