import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { UploadImageReqDto } from "@/domains/image/dtos/request/uploadImageReqDto";
import { UploadImageResDto } from "@/domains/image/dtos/response/uploadImageResDto";

const uploadImageApi = async (body: UploadImageReqDto): Promise<ApiResponse<UploadImageResDto>> => {
  const endpoint: string = "image/upload";

  const formData: FormData = new FormData();
  formData.append("dir", body.dir);
  formData.append("image", body.image);

  const apiResponse: ApiResponse<UploadImageResDto> = await fetcher({
    config: {
      url: buildApiServerUrl(endpoint),
      options: {
        method: "POST",
        body: formData,
      },
    },
  });

  return apiResponse;
};

export default uploadImageApi;
