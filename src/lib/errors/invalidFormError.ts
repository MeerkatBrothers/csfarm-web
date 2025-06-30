export default class InvalidFormError extends Error {
  constructor(message?: string) {
    super(message ?? "입력값이 유효하지 않아요.");
    this.name = "InvalidFormError";
  }
}
