import ApiError from '@/shared/errors/api/api-error';
import BadRequestError from '@/shared/errors/api/bad-request-error';
import UnauthorizedError from '@/shared/errors/api/unauthorized-error';
import ForbiddenError from '@/shared/errors/api/forbidden-error';
import NotFoundError from '@/shared/errors/api/not-found-error';
import ConflictError from '@/shared/errors/api/conflict-error';
import InternalServerError from '@/shared/errors/api/internal-server-error';

export default class ApiErrorFactory {
  static create(statusCode: number, code: string): ApiError {
    switch (statusCode) {
      case 400:
        return new BadRequestError(code);

      case 401:
        return new UnauthorizedError(code);

      case 403:
        return new ForbiddenError(code);

      case 404:
        return new NotFoundError(code);

      case 409:
        return new ConflictError(code);

      default:
        return new InternalServerError(code);
    }
  }
}
