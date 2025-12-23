import { useQuery } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import INSIGHT_QUERY_KEYS from '@/features/insight/constants/query-key';
import getInsight from '@/features/insight/apis/bff/get-insight';
import type { Insight } from '@/features/insight/models/insight';

const useInsightDetail = (insightId: string) => {
  return useQuery<Insight>({
    queryKey: INSIGHT_QUERY_KEYS.DETAIL(insightId),
    queryFn: async () => {
      const result = await getInsight(insightId);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);

      return result.data;
    },
  });
};

export default useInsightDetail;
