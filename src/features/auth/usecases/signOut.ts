import ResultError from '@/lib/errors/resultError';

import signOutRepository from '@/features/auth/repositories/signOutRepository';

const signOut = async (): Promise<void> => {
  const result = await signOutRepository();
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }
};

export default signOut;
