import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";

const kakaoEmailRepo = async (kakaoCode: string): Promise<Result<string>> => {
  const endpoint: string = `auth/kakao/email?code=${kakaoCode}`;

  const result: Result<string> = await internalFetcher<string>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "GET",
    },
  });

  return result;
};

export default kakaoEmailRepo;
