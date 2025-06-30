import HttpError from "@/lib/errors/http/httpError";

export default class BadRequestError extends HttpError {
  constructor(message?: string) {
    super(400, message ?? "잘못된 요청이에요.");
    this.name = "BadRequestError";
  }
}
