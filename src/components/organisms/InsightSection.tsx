import Title2 from "@/components/atoms/typography/Title2";
import Body1 from "@/components/atoms/typography/Body1";

interface InsightSectionProps {
  subject: string;
  description: string;
}

const InsightSection = ({ subject, description }: InsightSectionProps) => {
  return (
    <div className="space-y-2">
      <Title2 text={`🌾 ${subject}`} />

      <Body1 text={description} reading />
    </div>
  );
};

export default InsightSection;
