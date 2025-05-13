import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import withAccessTokenInterceptor from "@/lib/apis/interceptors/request/withAccessTokenInterceptor";

const signOutApi = async (): Promise<void> => {
  const endpoint: string = "auth/sign-out";

  await fetcher({
    config: {
      url: buildApiServerUrl(endpoint),
      options: {
        method: "DELETE",
      },
    },
    requestInterceptors: [withAccessTokenInterceptor],
  });
};

export default signOutApi;
