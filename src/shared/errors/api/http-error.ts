export default class HttpError extends Error {
  readonly statusCode: number;

  constructor(statusCode: number) {
    super(statusCode.toString());

    this.name = 'HttpError';
    this.statusCode = statusCode;
  }
}
