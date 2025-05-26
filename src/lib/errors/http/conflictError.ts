import HttpError from "@/lib/errors/http/httpError";

export default class ConflictError extends HttpError {
  constructor(message?: string) {
    super(409, message ?? "이미 존재하는 리소스에요.");
    this.name = "ConflictError";
  }
}
