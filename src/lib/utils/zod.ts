import { ZodType, SafeParseReturnType } from "zod";

import InvalidResponseError from "@/lib/errors/invalidResponseError";

export const validateOrThrow = <T>(schema: ZodType<T>, data: T): T => {
  const parsedSchema: SafeParseReturnType<T, T> = schema.safeParse(data);
  if (!parsedSchema.success) {
    throw new InvalidResponseError();
  }

  return parsedSchema.data;
};
