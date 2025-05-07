import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";

const fetchSignOut = async (accessToken: string): Promise<void> => {
  const endpoint: string = "auth/sign-out";
  await apiClient({
    url: getServerApiUrl(endpoint),
    options: {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });
};

export default fetchSignOut;
