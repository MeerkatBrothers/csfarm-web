"use client";

import { useState } from "react";

import { SubInsight } from "@/domains/insight/models/fragments/subInsight";

import Title3 from "@/components/atoms/typography/Title3";
import Body2 from "@/components/atoms/typography/Body2";

interface SubInsightSectionProps {
  subInsight: SubInsight;
}

const SubInsightSection = ({ subInsight }: SubInsightSectionProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);

  const toggleDescription = (): void => {
    setIsDescriptionOpen((prev) => !prev);
  };

  return (
    <div className="space-y-2">
      <button onClick={toggleDescription}>
        <Title3 text={`🙋 ${subInsight.subject}`} />
      </button>

      {isDescriptionOpen && <Body2 text={subInsight.description} reading />}
    </div>
  );
};

export default SubInsightSection;
