import HttpError from "@/lib/errors/http/httpError";

export default class ConflictError extends HttpError {
  constructor(errorMessage?: string) {
    super(409, "ConflictError", errorMessage ?? "이미 존재하는 리소스입니다.");
  }
}
