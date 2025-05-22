import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import reissueTokenRepo from "@/domains/auth/repositories/reissueTokenRepo";

const reissueToken = async (): Promise<void> => {
  const result: Result<null> = await reissueTokenRepo();
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }
};

export default reissueToken;
