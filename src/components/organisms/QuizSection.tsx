import { Quiz } from "@/domains/quiz/models/fragments/quiz";

import Heading1 from "@/components/atoms/typography/Heading1";
import QuizChoiceList from "@/components/organisms/QuizChoiceList";

interface QuizSectionProps {
  quiz: Quiz;
  choiceId: number | null;
  onChoice: (choiceId: number) => void;
}

const QuizSection = ({ quiz, choiceId, onChoice }: QuizSectionProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="px-4 py-5 rounded-lg bg-gray-100">
        <Heading1 text={quiz.content} />
      </div>

      <QuizChoiceList quizChoices={quiz.choices} choiceId={choiceId} onChoice={onChoice} />
    </div>
  );
};

export default QuizSection;
