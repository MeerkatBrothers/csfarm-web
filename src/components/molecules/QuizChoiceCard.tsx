'use client';

import type { QuizChoice } from '@/features/quiz/models/quiz-choice';

import Body from '@/components/atoms/typography/Body';

interface QuizChoiceCardProps {
  quizChoice: QuizChoice;
  isChoiced: boolean;
  onChoice: (choiceId: string) => void;
}

const QuizChoiceCard = ({ quizChoice, isChoiced, onChoice }: QuizChoiceCardProps) => {
  return (
    <button className="text-start" onClick={() => onChoice(quizChoice.id)}>
      <Body
        text={`👉 ${quizChoice.option}`}
        scale={1}
        styles={{ color: isChoiced ? 'text-primary-500' : undefined }}
      />
    </button>
  );
};

export default QuizChoiceCard;
