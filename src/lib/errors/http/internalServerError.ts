import HttpError from "@/lib/errors/http/httpError";

export default class InternalServerError extends HttpError {
  constructor(message?: string) {
    super(500, message ?? "서버 요청 중 오류가 발생했어요. 잠시 후 다시 시도해 주세요.");
    this.name = "InternalServerError";
  }
}
