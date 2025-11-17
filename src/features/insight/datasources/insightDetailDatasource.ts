import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { INSIGHT_NOT_FOUND_ERROR } from '@/features/insight/constants/errorMessage';
import { type InsightDetailResponse } from '@/features/insight/models/response/insightDetailResponse';

const insightDetailDatasource = async (insightId: string): Promise<InsightDetailResponse> => {
  const endpoint = `/insight/detail/${insightId}`;

  const response = await apiHttpClient<InsightDetailResponse>({
    method: 'GET',
    endpoint,
    errorMessages: {
      404: INSIGHT_NOT_FOUND_ERROR,
    },
  });

  return response;
};

export default insightDetailDatasource;
