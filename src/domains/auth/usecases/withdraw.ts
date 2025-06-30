import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import withdrawRepo from "@/domains/auth/repositories/withdrawRepo";

const withdraw = async (): Promise<void> => {
  const result: Result<null> = await withdrawRepo();
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }
};

export default withdraw;
