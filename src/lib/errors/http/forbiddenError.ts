import HttpError from "@/lib/errors/http/httpError";

export default class ForbiddenError extends HttpError {
  constructor(message?: string) {
    super(403, message ?? "접근 권한이 없어요.");
    this.name = "ForbiddenError";
  }
}
