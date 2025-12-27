import type { Insight } from '@/features/insight/models/insight';

import Heading from '@/components/atoms/typography/Heading';
import Body from '@/components/atoms/typography/Body';
import SubInsightList from '@/components/organisms/SubInsightList';

interface InsightSectionProps {
  insight: Insight;
}

const InsightSection = ({ insight }: InsightSectionProps) => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-4 rounded-lg bg-gray-100 px-4 py-5">
        <Heading text={insight.subject} scale={1} />

        <Body text={insight.description} scale={1} />
      </div>

      <SubInsightList subInsights={insight.subInsights} />
    </div>
  );
};

export default InsightSection;
