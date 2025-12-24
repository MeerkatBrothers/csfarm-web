import { NextRequest } from 'next/server';

import { ApiErrorCode } from '@/shared/errors/api-error-code';
import BadRequestError from '@/shared/errors/api/bad-request-error';

export const parseJsonOrThrow = async (request: NextRequest): Promise<unknown> => {
  try {
    return await request.json();
  } catch {
    throw new BadRequestError(ApiErrorCode.E40000001);
  }
};

export const parseFormDataOrThrow = async (
  request: NextRequest,
  key: string,
): Promise<FormDataEntryValue> => {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    throw new BadRequestError(ApiErrorCode.E40000002);
  }

  const value = formData.get(key);
  if (!value) throw new BadRequestError(ApiErrorCode.E40000002);

  return value;
};

export const parseQueryParam = (url: URL, key: string): string | null => {
  const value = url.searchParams.get(key);
  if (!value || value.trim() === '') return null;

  return value;
};

export const parseQueryParamOrThrow = (url: URL, key: string): string => {
  const value = parseQueryParam(url, key);
  if (!value) throw new BadRequestError(ApiErrorCode.E40000003);

  return value;
};

export const parsePathParam = (
  params: Record<string, string | undefined>,
  key: string,
): string | null => {
  const value = params[key];
  if (!value || value.trim() === '') return null;

  return value;
};

export const parsePathParamOrThrow = (
  params: Record<string, string | undefined>,
  key: string,
): string => {
  const value = parsePathParam(params, key);
  if (!value) throw new BadRequestError(ApiErrorCode.E40000004);

  return value;
};
