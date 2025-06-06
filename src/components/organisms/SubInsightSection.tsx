"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { SVG_SIZE } from "@/lib/constants/ui";

import { SubInsight } from "@/domains/insight/models/fragments/subInsight";

import Body1 from "@/components/atoms/typography/Body1";

interface SubInsightSectionProps {
  subInsight: SubInsight;
}

const SubInsightSection = ({ subInsight }: SubInsightSectionProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);

  const toggleDescription = (): void => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  return (
    <button className="flex flex-col text-start px-4 py-5 gap-4 rounded-xl bg-gray-100" onClick={toggleDescription}>
      <div className="flex justify-between items-center w-full gap-4">
        <div className="flex-1">
          <Body1 text={subInsight.subject} styles={{ weight: "font-bold" }} />
        </div>

        {isDescriptionOpen ? <FiChevronUp size={SVG_SIZE} /> : <FiChevronDown size={SVG_SIZE} />}
      </div>

      {isDescriptionOpen && <Body1 text={subInsight.description} reading />}
    </button>
  );
};

export default SubInsightSection;
