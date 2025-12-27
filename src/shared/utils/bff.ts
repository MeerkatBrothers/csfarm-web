import { NextRequest, NextResponse } from 'next/server';

import { success, failed } from '@/shared/types/result';

type BffHandler<T, C> = (request: NextRequest, context: C) => Promise<T>;

export const createBffErrorResponse = (e: unknown) => {
  const result = failed(e);

  return NextResponse.json(result, { status: result.statusCode });
};

export const createBffHandler = <T, C>(handler: BffHandler<T, C>) => {
  return async (request: NextRequest, context: C) => {
    try {
      const data = await handler(request, context);
      const result = success(data);

      return NextResponse.json(result, { status: 200 });
    } catch (e) {
      return createBffErrorResponse(e);
    }
  };
};
