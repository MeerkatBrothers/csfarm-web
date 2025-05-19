import { ZodError } from "zod";

import HttpError from "@/lib/errors/http/httpError";

export interface Success<T> {
  ok: true;
  data: T;
}

export interface Failed {
  ok: false;
  statusCode: number;
  message: string;
}

export type Result<T> = Success<T> | Failed;

export const success = <T>(data: T): Success<T> => {
  return { ok: true, data };
};

export const failed = (error: unknown): Failed => {
  if (error instanceof ZodError) {
    const message: string = error.errors[0]?.message ?? "입력값이 유효하지 않아요.";

    return {
      ok: false,
      statusCode: 500,
      message,
    };
  }

  if (error instanceof HttpError) {
    return {
      ok: false,
      statusCode: error.statusCode,
      message: error.message,
    };
  }

  if (error instanceof Error) {
    return {
      ok: false,
      statusCode: 500,
      message: error.message,
    };
  }

  return {
    ok: false,
    statusCode: 500,
    message: "알 수 없는 에러가 발생했어요.",
  };
};
