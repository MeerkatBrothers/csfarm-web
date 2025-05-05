import QuestionChoiceCard from "@/components/molecules/QuestionChoiceCard";

interface QuestionChoiceListProps {
  choices: string[];
  choiceId: number | null;
  onChoice: (choiceId: number) => void;
}

const QuestionChoiceList = ({
  choices,
  choiceId,
  onChoice,
}: QuestionChoiceListProps) => {
  return (
    <div className="flex flex-col items-start gap-2">
      {choices.map((choice, index) => {
        return (
          <QuestionChoiceCard
            key={index}
            choiceId={index}
            content={choice}
            isChoiced={choiceId === index}
            onChoice={onChoice}
          />
        );
      })}
    </div>
  );
};

export default QuestionChoiceList;
