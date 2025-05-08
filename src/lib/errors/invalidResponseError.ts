export default class InvalidResponseError extends Error {
  constructor(public cause?: unknown) {
    super("응답 데이터 형식이 올바르지 않습니다.");
    this.name = "InvalidResponseError";
  }
}
