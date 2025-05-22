import { Result } from "@/lib/types/result";

import kakaoEmailRepo from "@/domains/auth/repositories/kakaoEmailRepo";

const getKakaoEmail = async (kakaoCode: string): Promise<Result<string>> => {
  const result: Result<string> = await kakaoEmailRepo(kakaoCode);

  return result;
};

export default getKakaoEmail;
