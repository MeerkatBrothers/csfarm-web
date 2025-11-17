import apiHttpClient from '@/lib/apis/clients/apiHttpClient';
import { type Paginated } from '@/lib/models/paginated';

import { type StoredInsightResponse } from '@/features/insight/models/response/storedInsightResponse';

const storedInsightsDatasource = async (
  page: number,
  size: number,
): Promise<Paginated<StoredInsightResponse>> => {
  const endpoint = `/insight/storage?page=${page}&size=${size}`;

  const response = await apiHttpClient<Paginated<StoredInsightResponse>>({
    method: 'GET',
    endpoint,
  });

  return response;
};

export default storedInsightsDatasource;
