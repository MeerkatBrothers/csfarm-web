import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";

import { MEMBER_NOT_FOUND_ERROR } from "@/domains/auth/constants/errorMessage";

const signOutSource = async (accessToken: string): Promise<void> => {
  const endpoint: string = "auth/sign-out";

  await externalFetcher({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    errorMessage: {
      401: MEMBER_NOT_FOUND_ERROR,
    },
  });
};

export default signOutSource;
