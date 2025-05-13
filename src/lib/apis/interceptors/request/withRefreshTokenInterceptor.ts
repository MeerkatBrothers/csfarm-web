import { getRefreshTokenFromCookie } from "@/lib/cookie/refreshToken";
import { RequestConfig } from "@/lib/apis/types/config";
import RequestInterceptor from "@/lib/apis/interceptors/request/requestInterceptor";

const withRefreshTokenInterceptor: RequestInterceptor = async (config: RequestConfig) => {
  const { url, init = {} } = config;
  const refreshToken: string | null = await getRefreshTokenFromCookie();
  if (!refreshToken) {
    return config;
  }

  const headers: Headers = new Headers(init.headers);
  headers.set("Authorization", `Bearer ${refreshToken}`);

  const authorizedConfig: RequestConfig = {
    url,
    init: {
      ...init,
      headers,
    },
  };

  return authorizedConfig;
};

export default withRefreshTokenInterceptor;
