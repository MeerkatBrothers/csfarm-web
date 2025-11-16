import ResultError from '@/lib/errors/resultError';

import reissueTokenRepository from '@/features/auth/repositories/reissueTokenRepository';

const reissueToken = async (): Promise<void> => {
  const result = await reissueTokenRepository();
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }
};

export default reissueToken;
