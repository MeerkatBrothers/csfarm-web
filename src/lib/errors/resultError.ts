export default class ResultError extends Error {
  readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "ResultError";
    this.statusCode = statusCode;
  }
}
