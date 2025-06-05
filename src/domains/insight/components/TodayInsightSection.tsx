"use client";

import useTodayInsight from "@/domains/insight/hooks/useTodayInsight";
import HarvestInsightButton from "@/domains/insight/components/HarvestInsightButton";

import Title3 from "@/components/atoms/typography/Title3";
import InsightSection from "@/components/organisms/InsightSection";
import InsightSectionSkeleton from "@/components/organisms/skeleton/InsightSectionSkeleton";

const TodayInsightSection = () => {
  const { data: todayInsight, isLoading, isError, error } = useTodayInsight();

  if (isLoading) {
    return <InsightSectionSkeleton />;
  }

  if (isError) {
    throw error;
  }

  if (!todayInsight) {
    return null;
  }

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-4">
        <Title3 text="오늘의 수확물 🌾" />

        <InsightSection insight={todayInsight.insight} />
      </div>

      <div className="flex justify-end">
        <HarvestInsightButton insightId={todayInsight.insight.id} />
      </div>
    </div>
  );
};

export default TodayInsightSection;
