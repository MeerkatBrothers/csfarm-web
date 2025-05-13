import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import { RequestConfig } from "@/lib/apis/types/config";
import RequestInterceptor from "@/lib/apis/interceptors/request/requestInterceptor";

const withAccessTokenInterceptor: RequestInterceptor = async (config: RequestConfig) => {
  const { url, init = {} } = config;
  const accessToken: string | null = await getAccessTokenFromCookie();
  if (!accessToken) {
    return config;
  }

  const headers: Headers = new Headers(init.headers);
  headers.set("Authorization", `Bearer ${accessToken}`);

  const authorizedConfig: RequestConfig = {
    url,
    init: {
      ...init,
      headers,
    },
  };

  return authorizedConfig;
};

export default withAccessTokenInterceptor;
