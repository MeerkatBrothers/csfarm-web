import { cn } from '@/shared/utils/cn';

import Heading from '@/components/atoms/typography/Heading';
import Headline from '@/components/atoms/typography/Headline';

interface QuizSectionProps {
  question: string;
}

const QuizCard = ({ question }: QuizSectionProps) => {
  return (
    <div className={cn('flex flex-col gap-2 rounded-lg bg-gray-100 p-8', 'md:p-9', 'lg:p-10')}>
      <Headline text="오늘의 타작물" scale={1} styles={{ color: 'text-primary-500' }} />

      <Heading text={question} scale={1} />
    </div>
  );
};

export default QuizCard;
