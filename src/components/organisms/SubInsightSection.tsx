"use client";

import { useState } from "react";

import Title3 from "@/components/atoms/typography/Title3";
import Body2 from "@/components/atoms/typography/Body2";

interface SubInsightSectionProps {
  subject: string;
  description: string;
}

const SubInsightSection = ({
  subject,
  description,
}: SubInsightSectionProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);

  const toggleDescription = (): void => {
    setIsDescriptionOpen((prev) => !prev);
  };

  return (
    <div className="space-y-2">
      <button onClick={toggleDescription}>
        <Title3 text={`🙋 ${subject}`} />
      </button>

      {isDescriptionOpen && <Body2 text={description} reading />}
    </div>
  );
};

export default SubInsightSection;
