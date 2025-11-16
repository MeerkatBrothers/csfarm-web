import { NextRequest, NextResponse } from 'next/server';

import { success } from '@/lib/types/result';
import { createBffErrorResponse } from '@/lib/bff/response';

type BffHandler<T> = (request: NextRequest) => Promise<T>;

export const createBffHandler = <T>(handler: BffHandler<T>) => {
  return async (request: NextRequest) => {
    try {
      const data = await handler(request);
      const result = success(data);

      return NextResponse.json(result, { status: 200 });
    } catch (e) {
      return createBffErrorResponse(e);
    }
  };
};
