import { Result } from "@/lib/types/result";

import signOutRepo from "@/domains/auth/repositories/signOutRepo";

const signOut = async (): Promise<Result<null>> => {
  const result: Result<null> = await signOutRepo();

  return result;
};

export default signOut;
