import HttpError from "@/lib/errors/http/httpError";
import BadRequestError from "@/lib/errors/http/badRequestError";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";
import ForbiddenError from "@/lib/errors/http/forbiddenError";
import NotFoundError from "@/lib/errors/http/notFoundError";
import ConflictError from "@/lib/errors/http/conflictError";
import InternalServerError from "@/lib/errors/http/internalServerError";

export default class HttpErrorFactory {
  static create(statusCode: number, errorMessage?: string): HttpError {
    switch (statusCode) {
      case 400:
        return new BadRequestError(errorMessage);

      case 401:
        return new UnauthorizedError(errorMessage);

      case 403:
        return new ForbiddenError(errorMessage);

      case 404:
        return new NotFoundError(errorMessage);

      case 409:
        return new ConflictError(errorMessage);

      default:
        return new InternalServerError(errorMessage);
    }
  }
}
