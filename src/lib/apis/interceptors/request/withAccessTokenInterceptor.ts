import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import { RequestConfig } from "@/lib/apis/types/config";
import RequestInterceptor from "@/lib/apis/interceptors/request/requestInterceptor";

const withAccessTokenInterceptor: RequestInterceptor = async (config: RequestConfig) => {
  const { url, options = {} } = config;
  const accessToken: string | null = await getAccessTokenFromCookie();
  if (!accessToken) {
    return config;
  }

  const headers: Headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${accessToken}`);

  const authorizedConfig: RequestConfig = {
    url,
    options: {
      ...options,
      headers,
    },
  };

  return authorizedConfig;
};

export default withAccessTokenInterceptor;
