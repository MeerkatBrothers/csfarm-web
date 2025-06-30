export default class InvalidParamError extends Error {
  constructor(message?: string) {
    super(message ?? "유효하지 않은 경로에요.");
    this.name = "InvalidParamError";
  }
}
