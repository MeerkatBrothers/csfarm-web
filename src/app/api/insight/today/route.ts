import { NextRequest } from 'next/server';

import { createBffHandler } from '@/lib/bff/handler';

import todayInsightDatasource from '@/features/insight/datasources/todayInsightDatasource';
import { type TodayInsightResponse } from '@/features/insight/models/response/todayInsightResponse';

const todayInsightHandler = async (_: NextRequest): Promise<TodayInsightResponse> => {
  const todayInsight = await todayInsightDatasource();

  return todayInsight;
};

export const GET = createBffHandler(todayInsightHandler);
