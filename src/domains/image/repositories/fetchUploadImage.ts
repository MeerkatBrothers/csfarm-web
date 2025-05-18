import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import uploadImageApi from "@/domains/image/datasources/uploadImageApi";
import { UploadImageForm } from "@/domains/image/models/uploadImageForm";
import { UploadImageReqDto, uploadImageReqDtoSchema } from "@/domains/image/dtos/request/uploadImageReqDto";
import { UploadImageResDto, uploadImageResDtoSchema } from "@/domains/image/dtos/response/uploadImageResDto";

const fetchUploadImage = async (uploadImageForm: UploadImageForm): Promise<string> => {
  const { dir, image } = uploadImageForm;
  const requestBody: UploadImageReqDto = { dir, image };

  const validatedBody: UploadImageReqDto = validateOrThrow(uploadImageReqDtoSchema, requestBody);

  const apiResponse: ApiResponse<UploadImageResDto> = await uploadImageApi(validatedBody);

  const data: UploadImageResDto = apiResponse.data;

  const validatedData: UploadImageResDto = validateOrThrow(uploadImageResDtoSchema, data);

  const imageUrl: string = validatedData.imageUrl;

  return imageUrl;
};

export default fetchUploadImage;
