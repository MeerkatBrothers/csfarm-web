"use client";

import clsx from "clsx";

import { QuizChoice } from "@/domains/quiz/models/fragments/quizChoice";

import Body1 from "@/components/atoms/typography/Body1";

interface QuizChoiceCardProps {
  quizChoice: QuizChoice;
  isChoiced: boolean;
  onChoice: (choiceId: number) => void;
}

const QuizChoiceCard = ({ quizChoice, isChoiced, onChoice }: QuizChoiceCardProps) => {
  return (
    <button className={clsx("text-start p-4 rounded-lg", isChoiced && "bg-primary-light")} onClick={() => onChoice(quizChoice.id)}>
      <Body1 text={`👉 ${quizChoice.content}`} styles={{ textColor: isChoiced ? "text-primary" : undefined }} reading />
    </button>
  );
};

export default QuizChoiceCard;
