import { SubInsight } from "@/domains/insight/models/fragments/subInsight";

import SubInsightSection from "@/components/organisms/SubInsightSection";

interface SubInsightListProps {
  subInsights: SubInsight[];
}

const SubInsightList = ({ subInsights }: SubInsightListProps) => {
  return (
    <div className="space-y-6">
      {subInsights.map((subInsight, index) => (
        <SubInsightSection key={index} subInsight={subInsight} />
      ))}
    </div>
  );
};

export default SubInsightList;
