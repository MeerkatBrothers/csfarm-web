"use client";

import { useState } from "react";

import Title3 from "@/components/atoms/typography/Title3";
import Body2 from "@/components/atoms/typography/Body2";

interface SubInsightGroupProps {
  subject: string;
  description: string;
}

const SubInsightGroup = ({ subject, description }: SubInsightGroupProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);

  return (
    <div className="space-y-2">
      <button onClick={() => setIsDescriptionOpen((prev) => !prev)}>
        <Title3 text={`🙋 ${subject}`} />
      </button>

      {isDescriptionOpen && <Body2 text={description} reading />}
    </div>
  );
};

export default SubInsightGroup;
