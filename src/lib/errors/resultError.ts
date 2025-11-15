export default class ResultError extends Error {
  readonly statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.name = 'ResultError';
    this.statusCode = statusCode;
  }
}
