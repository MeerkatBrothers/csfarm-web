import HttpError from "@/lib/errors/http/httpError";

export default class ForbiddenError extends HttpError {
  constructor(errorMessage?: string) {
    super(403, "ForbiddenError", errorMessage ?? "접근 권한이 없습니다.");
  }
}
