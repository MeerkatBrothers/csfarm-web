import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import { CONTENT_TYPE_JSON } from "@/lib/apis/constants/contentType";
import internalAuthFetcher from "@/lib/apis/fetchers/internalAuthFetcher";

import { ModifyProfileReqDto } from "@/domains/profile/dtos/request/modifyProfileReqDto";

const modifyProfileRepo = async (body: ModifyProfileReqDto): Promise<Result<null>> => {
  const endpoint: string = "profile";

  const result: Result<null> = await internalAuthFetcher<null>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "PATCH",
      headers: {
        "Content-type": CONTENT_TYPE_JSON,
      },
      body: JSON.stringify(body),
    },
  });

  return result;
};

export default modifyProfileRepo;
