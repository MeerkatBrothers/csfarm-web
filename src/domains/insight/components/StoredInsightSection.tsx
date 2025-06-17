"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import useStoredInsight from "@/domains/insight/hooks/useStoredInsight";
import StoredInsightSectionSkeleton from "@/domains/insight/components/skeleton/StoredInsightSectionSkeleton";

import ToggleChip from "@/components/atoms/chip/ToggleChip";
import InsightPreviewList from "@/components/organisms/InsightPreviewList";

const weekOptions: string[] = ["이번주", "1주전", "2주전", "3주전"];

const StoredInsightSection = () => {
  const router = useRouter();

  const [weekOffset, setWeekOffset] = useState<number>(0);

  const { data: storedInsight, isLoading, isError, error } = useStoredInsight();

  if (isLoading) {
    return <StoredInsightSectionSkeleton />;
  }

  if (isError) {
    throw error;
  }

  if (!storedInsight) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2">
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
