import ApiError from '@/shared/errors/api/api-error';

export default class UnauthorizedError extends ApiError {
  constructor(code: string) {
    super(401, code);

    this.name = 'UnauthorizedError';
  }
}
