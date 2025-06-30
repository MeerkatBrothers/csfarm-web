import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ResultError from "@/lib/errors/resultError";

import uploadImageRepo from "@/domains/image/repositories/uploadImageRepo";
import { UploadImageReqDto, uploadImageReqDtoSchema } from "@/domains/image/dtos/request/uploadImageReqDto";
import { UploadImageResDto } from "@/domains/image/dtos/response/uploadImageResDto";

const uploadImage = async (image: File): Promise<string> => {
  const requestBody: UploadImageReqDto = { image };
  const validatedRequestBody: UploadImageReqDto = validateOrThrow(uploadImageReqDtoSchema, requestBody);

  const result: Result<UploadImageResDto> = await uploadImageRepo(validatedRequestBody);
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }

  const imageUrl: string = result.data.imageUrl;

  return imageUrl;
};

export default uploadImage;
