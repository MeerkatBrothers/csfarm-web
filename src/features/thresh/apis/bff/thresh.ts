import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/types/result';

const thresh = async (quizId: string, choiceId: string): Promise<Result<null>> => {
  const endpoint = `/thresh/${quizId}?choiceId=${choiceId}`;

  return await bffFetcher<null>({
    endpoint,
    method: 'POST',
  });
};

export default thresh;
