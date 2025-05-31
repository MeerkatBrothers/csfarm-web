"use client";

import { useState } from "react";

import useStoredInsight from "@/domains/insight/hooks/useStoredInsight";
import InsightPreviewListSkeleton from "@/domains/insight/components/InsightPreviewListSkeleton";

import ToggleChip from "@/components/atoms/chip/ToggleChip";
import InsightPreviewList from "@/components/organisms/InsightPreviewList";

const weekOptions: string[] = ["이번주", "1주전", "2주전", "3주전"];

const StoredInsightSection = () => {
  const [weekOffset, setWeekOffset] = useState<number>(0);

  const { data: storedInsight, isLoading, isError, error } = useStoredInsight();

  if (isLoading) {
    return <InsightPreviewListSkeleton />;
  }

  if (isError) {
    throw error;
  }

  if (!storedInsight) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="space-x-2">
        {weekOptions.map((weekOption, index) => (
          <ToggleChip key={index} label={weekOption} isActive={index === weekOffset} onClick={() => setWeekOffset(index)} />
        ))}
      </div>

      <InsightPreviewList insightPreviews={storedInsight.get(weekOffset) ?? []} />
    </div>
  );
};

export default StoredInsightSection;
