import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import { RequestConfig } from "@/lib/apis/types/config";
import ResponseInterceptor from "@/lib/apis/interceptors/response/responseInterceptor";

import reissueToken from "@/domains/auth/usecases/reissueToken";

const reissueTokenInterceptor: ResponseInterceptor = async (config: RequestConfig, response: Response): Promise<Response> => {
  if (response.status !== 401) {
    return response;
  }

  const { url, init = {} } = config;

  try {
    await reissueToken();

    const accessToken: string | null = await getAccessTokenFromCookie();
    if (!accessToken) {
      return response;
    }

    const headers: Headers = new Headers(init.headers);
    headers.set("Authorization", `Bearer ${accessToken}`);

    const authorizedInit: RequestInit = {
      ...init,
      headers,
    };

    const retryRequest: Request = new Request(url, authorizedInit);

    const retriedResponse: Response = await fetch(retryRequest);

    return retriedResponse;
  } catch (e) {
    return response;
  }
};

export default reissueTokenInterceptor;
