"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import useStoredInsight from "@/domains/insight/hooks/useStoredInsight";

import ToggleChip from "@/components/atoms/chip/ToggleChip";
import InsightPreviewList from "@/components/organisms/InsightPreviewList";
import InsightPreviewListSkeleton from "@/components/organisms/skeleton/InsightPreviewListSkeleton";

const weekOptions: string[] = ["이번주", "1주전", "2주전", "3주전"];

const StoredInsightSection = () => {
  const router = useRouter();

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

      <InsightPreviewList
        insightPreviews={storedInsight.get(weekOffset) ?? []}
        onClick={(insightId) => router.push(`/insight/detail/${insightId}`)}
      />
    </div>
  );
};

export default StoredInsightSection;
