import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";
import BadRequestError from "@/lib/errors/http/badRequestError";

import uploadImageSource from "@/domains/image/datasources/uploadImageSource";
import { UploadImageResDto, uploadImageResDtoSchema } from "@/domains/image/dtos/response/uploadImageResDto";

export const POST = async (request: Request): Promise<NextResponse<Result<UploadImageResDto>>> => {
  try {
    const formData: FormData = await request.formData();
    const dir: string | null = formData.get("dir") as string | null;
    const image: File | null = formData.get("image") as File | null;
    if (!dir || !image) {
      throw new BadRequestError("이미지가 잘 도착하지 않았어요. 다시 시도해 주세요.");
    }

    const apiResponse: ApiResponse<UploadImageResDto> = await uploadImageSource(dir, image);

    const data: UploadImageResDto = apiResponse.data;
    const validatedData: UploadImageResDto = validateOrThrow(uploadImageResDtoSchema, data);

    return NextResponse.json(success(validatedData));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
