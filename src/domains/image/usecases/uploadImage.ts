"use server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";

import fetchUploadImage from "@/domains/image/repositories/fetchUploadImage";
import { UploadImageForm, uploadImageFormSchema } from "@/domains/image/models/uploadImageForm";

const uploadImage = async (uploadImageForm: UploadImageForm): Promise<Result<string>> => {
  try {
    const validatedUploadImageForm: UploadImageForm = validateOrThrow(uploadImageFormSchema, uploadImageForm);

    const imageUrl: string = await fetchUploadImage(validatedUploadImageForm);

    return success(imageUrl);
  } catch (e) {
    return failed(e);
  }
};

export default uploadImage;
