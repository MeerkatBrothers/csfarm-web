'use client';

import useTodayInsight from '@/features/insight/hooks/useTodayInsight';
import HarvestInsightButton from '@/features/insight/components/HarvestInsightButton';
import TodayInsightSectionSkeleton from '@/features/insight/components/skeleton/TodayInsightSectionSkeleton';

import Title3 from '@/components/atoms/typography/Title3';
import InsightSection from '@/components/organisms/InsightSection';

const TodayInsightSection = () => {
  const { data: todayInsight, isLoading, isError, error } = useTodayInsight();

  if (isLoading) {
    return <TodayInsightSectionSkeleton />;
  }

  if (isError) {
    throw error;
  }

  if (!todayInsight) {
    return null;
  }

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-2">
        <Title3 text="오늘의 수확물 🌾" />

        <InsightSection insight={todayInsight.insight} />
      </div>

      <div className="md:self-end">
        <HarvestInsightButton insightId={todayInsight.insight.id} />
      </div>
    </div>
  );
};

export default TodayInsightSection;
