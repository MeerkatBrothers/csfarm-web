"use client";

import { useState } from "react";

import {
  WEEK_OPTION,
  WeekOption,
} from "@/app/(service)/insight/storage/(enum)/weekOption";

import Heading1 from "@/components/atoms/typography/Heading1";
import ToggleChip from "@/components/atoms/chip/ToggleChip";
import InsightPreviewList from "@/components/organisms/InsightPreviewList";

const InsightStoragePage = () => {
  const [weekOption, setWeekOption] = useState<WeekOption>(
    WEEK_OPTION.THIS_WEEK
  );

  return (
    <div className="space-y-10">
      <Heading1
        text={`홍길동 농부님,
        그동안의 수확물을 확인해볼까요?`}
      />

      <div className="flex gap-2">
        {Object.entries(WEEK_OPTION).map(([_, value], index) => (
          <ToggleChip
            key={index}
            label={value}
            isActive={value === weekOption}
            onClick={() => setWeekOption(value)}
          />
        ))}
      </div>

      <InsightPreviewList />
    </div>
  );
};

export default InsightStoragePage;
