import type { QuizChoice } from '@/features/quiz/models/quiz-choice';

import QuizChoiceCard from '@/components/molecules/QuizChoiceCard';

interface QuizChoiceListProps {
  quizChoices: QuizChoice[];
  choiceId: string | null;
  onChoice: (choiceId: string) => void;
}

const QuizChoiceList = ({ quizChoices, choiceId, onChoice }: QuizChoiceListProps) => {
  return (
    <div className="flex flex-col gap-12">
      {quizChoices.map((quizChoice, index) => {
        return (
          <QuizChoiceCard
            key={index}
            quizChoice={quizChoice}
            isChoiced={quizChoice.id === choiceId}
            onChoice={onChoice}
          />
        );
      })}
    </div>
  );
};

export default QuizChoiceList;
