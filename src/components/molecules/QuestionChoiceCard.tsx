"use client";

import clsx from "clsx";

import Body1 from "@/components/atoms/typography/Body1";

interface QuestionChoiceCardProps {
  choiceId: number;
  content: string;
  isChoiced: boolean;
  onChoice: (choiceId: number) => void;
}

const QuestionChoiceCard = ({
  choiceId,
  content,
  isChoiced,
  onChoice,
}: QuestionChoiceCardProps) => {
  return (
    <button
      className={clsx(
        "text-start p-4 rounded-lg",
        isChoiced && "bg-primary-light"
      )}
      onClick={() => onChoice(choiceId)}
    >
      <Body1
        text={`👉 ${content}`}
        reading
        styles={{ textColor: isChoiced ? "text-primary" : undefined }}
      />
    </button>
  );
};

export default QuestionChoiceCard;
