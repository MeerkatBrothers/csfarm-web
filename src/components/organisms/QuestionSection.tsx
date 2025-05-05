import Title2 from "@/components/atoms/typography/Title2";
import QuestionChoiceList from "@/components/organisms/QuestionChoiceList";

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

      <QuestionChoiceList
        choices={choices}
        choiceId={choiceId}
        onChoice={onChoice}
      />
    </div>
  );
};

export default QuestionSection;
