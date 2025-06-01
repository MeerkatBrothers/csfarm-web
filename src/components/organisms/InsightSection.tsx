import { Insight } from "@/domains/insight/models/fragments/insight";

import Title2 from "@/components/atoms/typography/Title2";
import Body1 from "@/components/atoms/typography/Body1";
import SubInsightList from "@/components/organisms/SubInsightList";

interface InsightSectionProps {
  insight: Insight;
}

const InsightSection = ({ insight }: InsightSectionProps) => {
  return (
    <div className="space-y-20">
      <div className="space-y-2">
        <Title2 text={`🌾 ${insight.subject}`} />

        <Body1 text={insight.description} reading />
      </div>

      <SubInsightList subInsights={insight.subInsights} />
    </div>
  );
};

export default InsightSection;
