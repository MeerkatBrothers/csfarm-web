import { validateOrThrow } from '@/lib/utils/zod';
import ResultError from '@/lib/errors/resultError';

import uploadImageRepository from '@/features/image/repositories/uploadImageRepository';
import {
  uploadImageRequestSchema,
  type UploadImageRequest,
} from '@/features/image/models/request/uploadImageRequest';

const uploadImage = async (image: File): Promise<string> => {
  const body: UploadImageRequest = { image };
  const validatedBody = validateOrThrow(uploadImageRequestSchema, body);

  const result = await uploadImageRepository(validatedBody);
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }

  const imageUrl = result.data.imageUrl;

  return imageUrl;
};

export default uploadImage;
