import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";

const withdrawSource = async (accessToken: string): Promise<void> => {
  const endpoint: string = "/auth/withdraw";

  await externalFetcher({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });
};

export default withdrawSource;
