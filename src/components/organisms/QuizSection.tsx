import { Quiz } from "@/domains/quiz/models/fragments/quiz";

import Title2 from "@/components/atoms/typography/Title2";
import QuizChoiceList from "@/components/organisms/QuizChoiceList";

interface QuizSectionProps {
  quiz: Quiz;
  choiceId: number | null;
  onChoice: (choiceId: number) => void;
}

const QuizSection = ({ quiz, choiceId, onChoice }: QuizSectionProps) => {
  return (
    <div className="space-y-4">
      <Title2 text={`🚜 ${quiz.content}`} />

      <QuizChoiceList quizChoices={quiz.choices} choiceId={choiceId} onChoice={onChoice} />
    </div>
  );
};

export default QuizSection;
