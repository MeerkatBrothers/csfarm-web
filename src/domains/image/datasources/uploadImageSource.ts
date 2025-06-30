import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { UploadImageResDto } from "@/domains/image/dtos/response/uploadImageResDto";

const uploadImageSource = async (image: File): Promise<ApiResponse<UploadImageResDto>> => {
  const endpoint: string = "image/upload";

  const formData: FormData = new FormData();
  formData.append("image", image);

  const apiResponse: ApiResponse<UploadImageResDto> = await externalFetcher({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "POST",
      body: formData,
    },
  });

  return apiResponse;
};

export default uploadImageSource;
