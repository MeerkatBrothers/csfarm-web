import HttpError from "@/lib/errors/http/httpError";

export default class BadRequestError extends HttpError {
  constructor(errorMessage?: string) {
    super(400, "BadRequestError", errorMessage ?? "잘못된 요청입니다.");
  }
}
