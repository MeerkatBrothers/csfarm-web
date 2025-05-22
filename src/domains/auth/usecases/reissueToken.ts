import { Result } from "@/lib/types/result";

import reissueTokenRepo from "@/domains/auth/repositories/reissueTokenRepo";

const reissueToken = async (): Promise<Result<null>> => {
  const result: Result<null> = await reissueTokenRepo();

  return result;
};

export default reissueToken;
