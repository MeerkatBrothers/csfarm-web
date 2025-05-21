import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";

const signOutSource = async (accessToken: string): Promise<void> => {
  const endpoint: string = "/auth/sign-out";

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

export default signOutSource;
