import { CONTENT_TYPE_JSON } from "@/lib/apis/constants/contentType";
import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";

import { UpdateProfileReqDto } from "@/domains/profile/dtos/request/updateProfileReqDto";

const updateProfileSource = async (body: UpdateProfileReqDto, accessToken: string): Promise<void> => {
  const endpoint: string = "profile";

  await externalFetcher({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "PATCH",
      headers: {
        "Content-type": CONTENT_TYPE_JSON,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    },
  });
};

export default updateProfileSource;
