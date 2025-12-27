import type { SubInsight } from '@/features/insight/models/sub-insight';

import SubInsightSection from '@/components/organisms/SubInsightSection';

interface SubInsightListProps {
  subInsights: SubInsight[];
}

const SubInsightList = ({ subInsights }: SubInsightListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {subInsights.map((subInsight, index) => (
        <SubInsightSection key={index} subInsight={subInsight} />
      ))}
    </div>
  );
};

export default SubInsightList;
