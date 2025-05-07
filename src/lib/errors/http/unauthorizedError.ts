import HttpError from "@/lib/errors/http/httpError";

export default class UnauthorizedError extends HttpError {
  constructor(errorMessage?: string) {
    super(401, "UnauthorizedError", errorMessage ?? "인증이 필요합니다.");
  }
}
