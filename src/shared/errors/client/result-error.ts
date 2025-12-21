export default class ResultError extends Error {
  readonly statusCode: number;
  readonly code: string;

  constructor(statusCode: number, code: string) {
    super(code);

    this.name = 'ResultError';
    this.statusCode = statusCode;
    this.code = code;
  }
}
