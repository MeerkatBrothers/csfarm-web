"use server";

import { validateOrThrow } from "@/lib/utils/zod";

import fetchUploadImage from "@/domains/image/repositories/fetchUploadImage";
import { UploadImageForm, uploadImageFormSchema } from "@/domains/image/models/uploadImageForm";

const uploadImage = async (uploadImageForm: UploadImageForm): Promise<string> => {
  const validatedUploadImageForm: UploadImageForm = validateOrThrow(uploadImageFormSchema, uploadImageForm);

  const imageUrl: string = await fetchUploadImage(validatedUploadImageForm);

  return imageUrl;
};

export default uploadImage;
