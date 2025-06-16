import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import { CONTENT_TYPE_JSON } from "@/lib/apis/constants/contentType";
import internalAuthFetcher from "@/lib/apis/fetchers/internalAuthFetcher";

import { UpdateProfileReqDto } from "@/domains/profile/dtos/request/updateProfileReqDto";

const updateProfileRepo = async (body: UpdateProfileReqDto): Promise<Result<null>> => {
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

export default updateProfileRepo;
