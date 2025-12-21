import ApiError from '@/shared/errors/api/api-error';

export default class InternalServerError extends ApiError {
  constructor(code: string) {
    super(500, code);

    this.name = 'InternalServerError';
  }
}
