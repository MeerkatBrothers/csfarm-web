import type { Insight } from '@/features/insight/models/insight';

import HarvestButton from '@/features/harvest/components/HarvestButton';

import TodayInsightGreeting from '@/features/insight/components/TodayInsightGreeting';
import InsightCard from '@/components/organisms/InsightCard';
import SubInsightCard from '@/components/organisms/SubInsightCard';

interface TodayInsightSectionProps {
  insight: Insight;
}

const TodayInsightSection = ({ insight }: TodayInsightSectionProps) => {
  const { id, subject, description, publishedAt, subInsights } = insight;

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-4">
        <TodayInsightGreeting />

        <div className="flex flex-col gap-12">
          <InsightCard subject={subject} description={description} publishedAt={publishedAt} />

          <div className="flex flex-col gap-4">
            {subInsights.map((subInsight) => {
              const { id, subject, description } = subInsight;

              return (
                <SubInsightCard
                  key={`today-sub-insight-${id}`}
                  subject={subject}
                  description={description}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="md:self-end">
        <HarvestButton insightId={id} />
      </div>
    </div>
  );
};

export default TodayInsightSection;
