import { ZodType, SafeParseReturnType } from "zod";

export const validateOrThrow = <T>(schema: ZodType<T>, data: unknown): T => {
  const parsedSchema: SafeParseReturnType<unknown, T> = schema.safeParse(data);
  if (!parsedSchema.success) {
    throw parsedSchema.error;
  }

  return parsedSchema.data;
};
