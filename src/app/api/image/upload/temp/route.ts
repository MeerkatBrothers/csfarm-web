import { NextRequest } from 'next/server';

import { createBffHandler } from '@/shared/utils/bff';
import { validateOrThrow } from '@/shared/utils/zod';

import fetchUploadImage from '@/features/image/apis/server/fetch-upload-image';
import type { UploadedImage } from '@/features/image/models/uploaded-image';
import { imageFormSchema, type ImageForm } from '@/features/image/models/image.form';

const uploadImageHandler = async (request: NextRequest): Promise<UploadedImage> => {
  const formData = await request.formData();
  const image = formData.get('image') as File;
  const requestBody: ImageForm = { image };
  const validatedBody = validateOrThrow(imageFormSchema, requestBody);

  return await fetchUploadImage(validatedBody.image);
};

export const POST = createBffHandler(uploadImageHandler);
