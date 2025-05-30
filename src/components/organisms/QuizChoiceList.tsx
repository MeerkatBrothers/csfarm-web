import { QuizChoice } from "@/domains/quiz/models/fragments/quizChoice";

import QuizChoiceCard from "@/components/molecules/QuizChoiceCard";

interface QuizChoiceListProps {
  quizChoices: QuizChoice[];
  choiceId: number | null;
  onChoice: (choiceId: number) => void;
}

const QuizChoiceList = ({ quizChoices, choiceId, onChoice }: QuizChoiceListProps) => {
  return (
    <div className="flex flex-col items-start gap-2">
      {quizChoices.map((quizChoice, index) => {
        return <QuizChoiceCard key={index} quizChoice={quizChoice} isChoiced={choiceId === index} onChoice={onChoice} />;
      })}
    </div>
  );
};

export default QuizChoiceList;
