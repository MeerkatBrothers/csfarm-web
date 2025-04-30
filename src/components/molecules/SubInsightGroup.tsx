"use client";

import { useState } from "react";

import H3 from "@/components/atoms/typography/H3";
import Body2 from "@/components/atoms/typography/Body2";

interface SubInsightGroupProps {
  subject: string;
  description: string;
}

const SubInsightGroup = ({ subject, description }: SubInsightGroupProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);

  return (
    <div className="space-y-2">
      <button
        className="cursor-pointer"
        onClick={() => setIsDescriptionOpen((prev) => !prev)}
      >
        <H3 text={`🙋 ${subject}`} />
      </button>

      {isDescriptionOpen && <Body2 text={description} />}
    </div>
  );
};

export default SubInsightGroup;
