import { NextRequest } from 'next/server';

import { createBffHandler } from '@/lib/bff/handler';
import { getAccessTokenFromCookie } from '@/lib/cookie/accessToken';
import BadRequestError from '@/lib/errors/http/badRequestError';
import UnauthorizedError from '@/lib/errors/http/unauthorizedError';

import uploadImageDatasource from '@/features/image/datasources/uploadImageDatasource';
import { type UploadImageResponse } from '@/features/image/models/response/uploadImageResponse';

const uploadImageHandler = async (request: NextRequest): Promise<UploadImageResponse> => {
  const formData = await request.formData();
  const image = formData.get('image') as File | null;
  if (!image) {
    throw new BadRequestError('이미지가 도착하지 않았어요. 다시 시도해 주세요.');
  }

  const storedAccessToken = await getAccessTokenFromCookie();
  if (!storedAccessToken) {
    throw new UnauthorizedError();
  }

  const uploadImageResponse = await uploadImageDatasource(image, storedAccessToken);

  return uploadImageResponse;
};

export const POST = createBffHandler(uploadImageHandler);
