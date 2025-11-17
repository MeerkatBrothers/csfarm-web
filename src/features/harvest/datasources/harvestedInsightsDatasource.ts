import apiHttpClient from '@/lib/apis/clients/apiHttpClient';
import { type Paginated } from '@/lib/models/paginated';

import { type HarvestedInsightResponse } from '@/features/harvest/models/response/harvestedInsightResponse';

const harvestedInsightsDatasource = async (
  page: number,
  size: number,
  accessToken: string,
): Promise<Paginated<HarvestedInsightResponse>> => {
  const endpoint = `/harvest/harvested?page=${page}&size=${size}`;

  const response = await apiHttpClient<Paginated<HarvestedInsightResponse>>({
    method: 'GET',
    endpoint,
    token: accessToken,
  });

  return response;
};

export default harvestedInsightsDatasource;
