import type { Insight } from '@/features/insight/models/insight';
import HarvestButton from '@/features/harvest/components/HarvestButton';

import Title from '@/components/atoms/typography/Title';
import InsightSection from '@/components/organisms/InsightSection';

interface TodayInsightSectionProps {
  insight: Insight;
}

const TodayInsightSection = ({ insight }: TodayInsightSectionProps) => {
  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-2">
        <Title text="오늘의 수확물 🌾" scale={3} />

        <InsightSection insight={insight} />
      </div>

      <div className="md:self-end">
        <HarvestButton insightId={insight.id} />
      </div>
    </div>
  );
};

export default TodayInsightSection;
