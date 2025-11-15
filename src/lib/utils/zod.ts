import { ZodType } from 'zod';

export const validateOrThrow = <T>(schema: ZodType<T>, data: unknown): T => {
  const parsedSchema = schema.safeParse(data);
  if (!parsedSchema.success) {
    throw parsedSchema.error;
  }

  return parsedSchema.data;
};
