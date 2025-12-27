import type { Quiz } from '@/features/quiz/models/quiz';

import Heading from '@/components/atoms/typography/Heading';
import QuizChoiceList from '@/components/organisms/QuizChoiceList';

interface QuizSectionProps {
  quiz: Quiz;
  choiceId: string | null;
  onChoice: (choiceId: string) => void;
}

const QuizSection = ({ quiz, choiceId, onChoice }: QuizSectionProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-lg bg-gray-100 px-4 py-5">
        <Heading text={quiz.question} scale={1} />
      </div>

      <QuizChoiceList quizChoices={quiz.choices} choiceId={choiceId} onChoice={onChoice} />
    </div>
  );
};

export default QuizSection;
