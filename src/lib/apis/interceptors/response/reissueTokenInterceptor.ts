import { Result } from "@/lib/types/result";
import { RequestConfig } from "@/lib/apis/types/config";
import ResponseInterceptor from "@/lib/apis/interceptors/response/responseInterceptor";

import reissueToken from "@/domains/auth/usecases/reissueToken";
import Token from "@/domains/auth/models/token";

const reissueTokenInterceptor: ResponseInterceptor = async (config: RequestConfig, response: Response): Promise<Response> => {
  if (response.status !== 401) {
    return response;
  }

  const { url, options = {} } = config;

  const tokenResult: Result<Token> = await reissueToken();
  if (!tokenResult.ok) {
    return response;
  }
  const accessToken: string = tokenResult.data.accessToken;

  const headers: Headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${accessToken}`);

  const authorizedOptions: RequestInit = {
    ...options,
    headers,
  };

  const retryRequest: Request = new Request(url, authorizedOptions);

  const retriedResponse: Response = await fetch(retryRequest);

  return retriedResponse;
};

export default reissueTokenInterceptor;
