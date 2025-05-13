import { getRefreshTokenFromCookie } from "@/lib/cookie/refreshToken";
import { RequestConfig } from "@/lib/apis/types/config";
import RequestInterceptor from "@/lib/apis/interceptors/request/requestInterceptor";

const withRefreshTokenInterceptor: RequestInterceptor = async (config: RequestConfig) => {
  const { url, options = {} } = config;
  const refreshToken: string | null = await getRefreshTokenFromCookie();
  if (!refreshToken) {
    return config;
  }

  const headers: Headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${refreshToken}`);

  const authorizedConfig: RequestConfig = {
    url,
    options: {
      ...options,
      headers,
    },
  };

  return authorizedConfig;
};

export default withRefreshTokenInterceptor;
