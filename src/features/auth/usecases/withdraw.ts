import ResultError from '@/lib/errors/resultError';

import withdrawRepository from '@/features/auth/repositories/withdrawRepository';

const withdraw = async (): Promise<void> => {
  const result = await withdrawRepository();
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }
};

export default withdraw;
