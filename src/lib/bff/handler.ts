import { NextRequest, NextResponse } from 'next/server';

import { success } from '@/lib/types/result';
import { createBffErrorResponse } from '@/lib/bff/response';

export type BffContext = {
  params?: Record<string, string | undefined>;
};

type BffHandler<T> = (request: NextRequest, context: BffContext) => Promise<T>;

export const createBffHandler = <T>(handler: BffHandler<T>) => {
  return async (request: NextRequest, context: BffContext = {}) => {
    try {
      const data = await handler(request, context);
      const result = success(data);

      return NextResponse.json(result, { status: 200 });
    } catch (e) {
      return createBffErrorResponse(e);
    }
  };
};
