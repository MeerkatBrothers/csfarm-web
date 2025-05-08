export default class UnknownError extends Error {
  constructor() {
    super("알 수 없는 에러가 발생했습니다.");
    this.name = "UnknownError";
  }
}
