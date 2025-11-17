import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { type HarvestStatusResponse } from '@/features/harvest/models/response/harvestStatusResponse';

const harvestStatusDatasource = async (
  insightId: string,
  accessToken: string,
): Promise<HarvestStatusResponse> => {
  const endpoint = `/harvest/status/${insightId}`;

  const response = await apiHttpClient<HarvestStatusResponse>({
    method: 'GET',
    endpoint,
    token: accessToken,
  });

  return response;
};

export default harvestStatusDatasource;
