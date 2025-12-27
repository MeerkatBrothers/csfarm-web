import type { HarvestedInsight } from '@/features/harvest/models/harvested-insight';

import HarvestedInsightCard from '@/components/molecules/HarvestedInsightCard';

interface HarvestedInsightListProps {
  harvestedInsights: HarvestedInsight[];
  onClick: (insightId: string) => void;
}

const HarvestedInsightList = ({ harvestedInsights, onClick }: HarvestedInsightListProps) => {
  return (
    <div className="flex flex-col gap-10">
      {harvestedInsights.map((harvestedInsight, index) => {
        return (
          <HarvestedInsightCard key={index} harvestedInsight={harvestedInsight} onClick={onClick} />
        );
      })}
    </div>
  );
};

export default HarvestedInsightList;
