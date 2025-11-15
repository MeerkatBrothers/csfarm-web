import { Result } from '@/lib/types/result';
import ResultError from '@/lib/errors/resultError';

import signOutRepo from '@/features/auth/repositories/signOutRepo';

const signOut = async (): Promise<void> => {
  const result: Result<null> = await signOutRepo();
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }
};

export default signOut;
