import Title2 from "@/components/atoms/typography/Title2";
import QuestionChoiceCard from "@/components/molecules/QuestionChoiceCard";

interface QuestionSectionProps {
  question: string;
  choices: string[];
  choiceId: number | null;
  onChoice: (choiceId: number) => void;
}

const QuestionSection = ({
  question,
  choices,
  choiceId,
  onChoice,
}: QuestionSectionProps) => {
  return (
    <div className="space-y-4">
      <Title2 text={`🚜 ${question}`} />

      <div className="flex flex-col items-start space-y-2">
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
    </div>
  );
};

export default QuestionSection;
