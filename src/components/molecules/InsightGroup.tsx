import H1 from "@/components/atoms/typography/H1";
import Body1 from "@/components/atoms/typography/Body1";

interface InsightGroupProps {
  subject: string;
  description: string;
}

const InsightGroup = ({ subject, description }: InsightGroupProps) => {
  return (
    <div className="space-y-2">
      <H1 text={`🌾 ${subject}`} />

      <Body1 text={description} />
    </div>
  );
};

export default InsightGroup;
