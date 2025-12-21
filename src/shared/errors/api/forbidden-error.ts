import ApiError from '@/shared/errors/api/api-error';

export default class ForbiddenError extends ApiError {
  constructor(code: string) {
    super(403, code);

    this.name = 'ForbiddenError';
  }
}
