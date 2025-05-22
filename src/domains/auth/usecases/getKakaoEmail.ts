import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import kakaoEmailRepo from "@/domains/auth/repositories/kakaoEmailRepo";

const getKakaoEmail = async (kakaoCode: string): Promise<string> => {
  const result: Result<string> = await kakaoEmailRepo(kakaoCode);
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }

  const kakaoEmail: string = result.data;

  return kakaoEmail;
};

export default getKakaoEmail;
