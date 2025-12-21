import ApiError from '@/shared/errors/api/api-error';

export default class ConflictError extends ApiError {
  constructor(code: string) {
    super(409, code);

    this.name = 'ConflictError';
  }
}
