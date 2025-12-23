import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { Insight } from '@/features/insight/models/insight';

const fetchTodayInsight = async (): Promise<Insight> => {
  const endpoint = '/insight/today';

  return await apiFetcher<Insight>({
    endpoint,
    method: 'GET',
  });
};

export default fetchTodayInsight;
