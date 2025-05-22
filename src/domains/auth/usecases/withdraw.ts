import { Result } from "@/lib/types/result";

import withdrawRepo from "@/domains/auth/repositories/withdrawRepo";

const withdraw = async (): Promise<Result<null>> => {
  const result: Result<null> = await withdrawRepo();

  return result;
};

export default withdraw;
