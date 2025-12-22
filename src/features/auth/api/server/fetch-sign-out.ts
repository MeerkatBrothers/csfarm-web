import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

const fetchSignOut = async (refreshToken: string): Promise<void> => {
  const endpoint = '/auth/sign-out';

  await apiFetcher({
    endpoint,
    method: 'DELETE',
    token: refreshToken,
  });
};

export default fetchSignOut;
