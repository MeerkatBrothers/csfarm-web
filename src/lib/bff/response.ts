import { NextResponse } from 'next/server';

import { failed } from '@/lib/types/result';

export const createBffErrorResponse = (e: unknown) => {
  const result = failed(e);

  return NextResponse.json(result, { status: result.statusCode });
};
