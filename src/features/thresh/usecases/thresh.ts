import { validateOrThrow } from '@/lib/utils/zod';
import ResultError from '@/lib/errors/resultError';

import threshRepository from '@/features/thresh/repositories/threshRepository';
import {
  threshRequestSchema,
  type ThreshRequest,
} from '@/features/thresh/models/request/threshRequest';

const thresh = async (quizId: string, choiceId: string): Promise<void> => {
  const requestBody: ThreshRequest = { quizId, choiceId };
  const validatedBody = validateOrThrow(threshRequestSchema, requestBody);

  const result = await threshRepository(validatedBody);
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }
};

export default thresh;
