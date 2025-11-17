import bffHttpClient from '@/lib/apis/clients/bffHttpClient';
import { type Result } from '@/lib/types/result';

import { type InsightDetailResponse } from '@/features/insight/models/response/insightDetailResponse';

const insightDetailRepository = async (
  insightId: string,
): Promise<Result<InsightDetailResponse>> => {
  const endpoint = `/insight/detail/${insightId}`;

  const result = await bffHttpClient<InsightDetailResponse>({
    method: 'GET',
    endpoint,
  });

  return result;
};

export default insightDetailRepository;
