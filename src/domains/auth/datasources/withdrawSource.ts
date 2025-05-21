import { buildApiServerUrl } from "@/lib/utils/url";
import externalAuthFetcher from "@/lib/apis/fetchers/externalAuthFetcher";

const withdrawSource = async (accessToken: string): Promise<void> => {
  const endpoint: string = "/auth/withdraw";

  await externalAuthFetcher({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "DELETE",
    },
    accessToken,
  });
};

export default withdrawSource;
