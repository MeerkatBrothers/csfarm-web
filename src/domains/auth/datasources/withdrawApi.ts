import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import withAccessTokenInterceptor from "@/lib/apis/interceptors/request/withAccessTokenInterceptor";
import reissueTokenInterceptor from "@/lib/apis/interceptors/response/reissueTokenInterceptor";

const withdrawApi = async (): Promise<void> => {
  const endpoint: string = "auth/withdraw";

  await fetcher({
    config: {
      url: buildApiServerUrl(endpoint),
      options: {
        method: "DELETE",
      },
    },
    requestInterceptors: [withAccessTokenInterceptor],
    responseInterceptors: [reissueTokenInterceptor],
  });
};

export default withdrawApi;
