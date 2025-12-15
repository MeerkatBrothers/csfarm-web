'use client';

import { type QuizChoice } from '@/features/quiz/models/quizChoice';

import Body1 from '@/components/atoms/typography/Body1';

interface QuizChoiceCardProps {
  quizChoice: QuizChoice;
  isChoiced: boolean;
  onChoice: (choiceId: string) => void;
}

const QuizChoiceCard = ({ quizChoice, isChoiced, onChoice }: QuizChoiceCardProps) => {
  return (
    <button className="text-start" onClick={() => onChoice(quizChoice.id)}>
      <Body1
        text={`👉 ${quizChoice.option}`}
        styles={{ color: isChoiced ? 'text-primary-500' : undefined }}
        reading
      />
    </button>
  );
};

export default QuizChoiceCard;
