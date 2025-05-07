import HttpError from "@/lib/errors/http/httpError";

export default class NotFoundError extends HttpError {
  constructor(errorMessage?: string) {
    super(404, "NotFoundError", errorMessage ?? "요청하신 리소스를 찾을 수 없습니다.");
  }
}
