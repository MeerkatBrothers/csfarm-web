import HttpError from "@/lib/errors/http/httpError";

export default class UnauthorizedError extends HttpError {
  constructor(message?: string) {
    super(401, message ?? "인증이 필요해요.");
    this.name = "UnauthorizedError";
  }
}
