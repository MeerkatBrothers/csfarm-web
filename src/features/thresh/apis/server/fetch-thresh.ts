import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

const fetchThresh = async (
  quizId: string,
  choiceId: string,
  accessToken: string,
): Promise<void> => {
  const endpoint = `/thresh/${quizId}?choiceId=${choiceId}`;

  return await apiFetcher({
    endpoint,
    method: 'POST',
    token: accessToken,
  });
};

export default fetchThresh;
