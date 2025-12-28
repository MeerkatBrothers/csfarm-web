'use client';

import { cn } from '@/shared/utils/cn';

import Body from '@/components/atoms/typography/Body';

interface QuizChoiceCardProps {
  id: string;
  option: string;
  isChoiced: boolean;
  onChoice: (choiceId: string) => void;
}

const QuizChoiceCard = ({ id, option, isChoiced, onChoice }: QuizChoiceCardProps) => {
  return (
    <button
      className={cn(
        'flex items-center justify-between gap-8 overflow-hidden rounded-lg px-6 py-6 text-start',
        'md:px-7',
        'lg:px-8',
        isChoiced ? 'bg-primary-100' : 'bg-gray-100',
      )}
      onClick={() => onChoice(id)}
    >
      <Body text={option} scale={1} />
    </button>
  );
};

export default QuizChoiceCard;
