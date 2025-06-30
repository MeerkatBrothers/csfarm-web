import HttpError from "@/lib/errors/http/httpError";

export default class NotFoundError extends HttpError {
  constructor(message?: string) {
    super(404, message ?? "리소스를 찾을 수 없어요.");
    this.name = "NotFoundError";
  }
}
