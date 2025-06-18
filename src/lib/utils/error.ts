import { ZodError } from "zod";

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof ZodError) {
    return error.errors[0]?.message || "입력값이 유효하지 않아요.";
  }
  if (error instanceof Error) {
    return error.message;
  }

  return "알 수 없는 오류가 발생했어요.";
};
