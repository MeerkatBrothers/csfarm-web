import { Result } from "@/lib/types/result";
import { buildProxyServerUrl } from "@/lib/utils/url";
import internalFetcher from "@/lib/apis/fetchers/internalFetcher";

import { UploadImageReqDto } from "@/domains/image/dtos/request/uploadImageReqDto";
import { UploadImageResDto } from "@/domains/image/dtos/response/uploadImageResDto";

const uploadImageRepo = async (body: UploadImageReqDto): Promise<Result<UploadImageResDto>> => {
  const endpoint: string = "image/upload";

  const formData: FormData = new FormData();
  formData.append("image", body.image);

  const result: Result<UploadImageResDto> = await internalFetcher({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: "POST",
      body: formData,
    },
  });

  return result;
};

export default uploadImageRepo;
