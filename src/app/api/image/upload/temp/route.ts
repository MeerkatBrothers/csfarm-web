import { NextRequest } from 'next/server';

import { createBffHandler } from '@/shared/utils/bff';
import { parseFormDataOrThrow } from '@/shared/utils/parser/request';
import { validateOrThrow } from '@/shared/utils/zod';
import { getAccessTokenFromCookieOrThrow } from '@/shared/cookie/access-token';

import fetchUploadImage from '@/features/image/apis/server/fetch-upload-image';
import type { UploadedImage } from '@/features/image/models/uploaded-image';
import { imageFormSchema, type ImageForm } from '@/features/image/models/image.form';

const uploadImageHandler = async (request: NextRequest): Promise<UploadedImage> => {
  const storedAccessToken = await getAccessTokenFromCookieOrThrow();

  const image = (await parseFormDataOrThrow(request, 'image')) as File;
  const requestBody: ImageForm = { image };
  const validatedBody = validateOrThrow(imageFormSchema, requestBody);

  return await fetchUploadImage(validatedBody.image, storedAccessToken);
};

export const POST = createBffHandler(uploadImageHandler);
