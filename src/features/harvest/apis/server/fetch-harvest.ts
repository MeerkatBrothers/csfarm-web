import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

const fetchHarvest = async (insightId: string, accessToken: string): Promise<void> => {
  const endpoint = `/harvest/${insightId}`;

  return await apiFetcher({
    endpoint,
    method: 'POST',
    token: accessToken,
  });
};

export default fetchHarvest;
