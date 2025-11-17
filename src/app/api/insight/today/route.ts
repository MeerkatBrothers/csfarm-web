import { NextRequest } from 'next/server';

import { createBffHandler } from '@/lib/bff/handler';

import todayInsightDatasource from '@/features/insight/datasources/todayInsightDatasource';

const todayInsightHandler = async (_: NextRequest) => {
  const todayInsight = await todayInsightDatasource();

  return todayInsight;
};

export const GET = createBffHandler(todayInsightHandler);
