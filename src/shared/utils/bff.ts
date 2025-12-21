import { NextRequest, NextResponse } from 'next/server';

import { success, failed } from '@/shared/types/result';

type BffHandler<T> = (request: NextRequest, context: BffContext) => Promise<T>;

export type BffContext = {
  params?: Record<string, string | undefined>;
};

export const createBffErrorResponse = (e: unknown) => {
  const result = failed(e);

  return NextResponse.json(result, { status: result.statusCode });
};

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
