import { Insight } from "@/domains/insight/models/fragments/insight";

import Heading1 from "@/components/atoms/typography/Heading1";
import Body1 from "@/components/atoms/typography/Body1";
import SubInsightList from "@/components/organisms/SubInsightList";

interface InsightSectionProps {
  insight: Insight;
}

const InsightSection = ({ insight }: InsightSectionProps) => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col px-4 py-5 gap-4 rounded-lg bg-gray-100">
        <Heading1 text={insight.subject} />

        <Body1 text={insight.description} reading />
      </div>

      <SubInsightList subInsights={insight.subInsights} />
    </div>
  );
};

export default InsightSection;
