import { CONTENT_TYPE_JSON } from "@/lib/apis/constants/contentType";
import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";

import { ModifyProfileReqDto } from "@/domains/profile/dtos/request/modifyProfileReqDto";

const modifyProfileSource = async (body: ModifyProfileReqDto, accessToken: string): Promise<void> => {
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

export default modifyProfileSource;
