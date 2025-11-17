import authBffHttpClient from '@/lib/apis/clients/authBffHttpClient';
import { type Result } from '@/lib/types/result';

import { type HarvestStatusResponse } from '@/features/harvest/models/response/harvestStatusResponse';

const harvestStatusRepository = async (
  insightId: string,
): Promise<Result<HarvestStatusResponse>> => {
  const endpoint = `/harvest/status/${insightId}`;

  const result = await authBffHttpClient<HarvestStatusResponse>({
    method: 'GET',
    endpoint,
  });

  return result;
};

export default harvestStatusRepository;
