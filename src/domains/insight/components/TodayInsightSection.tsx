"use client";

import useTodayInsight from "@/domains/insight/hooks/useTodayInsight";
import InsightSectionSkeleton from "@/domains/insight/components/InsightSectionSkeleton";
import HarvestInsightButton from "@/domains/insight/components/HarvestInsightButton";

import InsightSection from "@/components/organisms/InsightSection";

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
    <div className="space-y-24">
      <InsightSection insight={todayInsight.insight} />

      <div className="flex justify-end">
        <HarvestInsightButton insightId={todayInsight.insight.id} />
      </div>
    </div>
  );
};

export default TodayInsightSection;
