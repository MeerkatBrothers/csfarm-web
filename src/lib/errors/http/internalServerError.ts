import HttpError from "@/lib/errors/http/httpError";

export default class InternalServerError extends HttpError {
  constructor(errorMessage?: string) {
    super(500, "InternalServerError", errorMessage ?? "서버 요청 중 오류가 발생했습니다.");
  }
}
