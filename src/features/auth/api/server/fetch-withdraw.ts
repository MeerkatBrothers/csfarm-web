import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

const fetchWithdraw = async (accessToken: string): Promise<void> => {
  const endpoint = '/auth/withdraw';

  await apiFetcher({
    endpoint,
    method: 'DELETE',
    token: accessToken,
  });
};

export default fetchWithdraw;
