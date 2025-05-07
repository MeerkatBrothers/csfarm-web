export default abstract class HttpError extends Error {
  statusCode: number;
  errorType: string;

  constructor(statusCode: number, errorType: string, message: string) {
    super(message);
    this.name = "HttpError";
    this.statusCode = statusCode;
    this.errorType = errorType;
  }
}
