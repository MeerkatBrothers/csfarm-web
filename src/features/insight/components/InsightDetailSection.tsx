'use client';

import useInsightDetail from '@/features/insight/hooks/useInsightDetail';
import InsightDetailSectionSkeleton from '@/features/insight/components/skeleton/InsightDetailSectionSkeleton';

import InsightCard from '@/components/organisms/InsightCard';
import SubInsightCard from '@/components/organisms/SubInsightCard';

interface InsightDetailSectionProps {
  insightId: string;
}

const InsightDetailSection = ({ insightId }: InsightDetailSectionProps) => {
  const { data: insightDetail, isLoading, isError, error } = useInsightDetail(insightId);

  if (isLoading) return <InsightDetailSectionSkeleton />;
  if (isError) throw error;
  if (!insightDetail) return null;

  const { subject, description, publishedAt, subInsights } = insightDetail;

  return (
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
  );
};

export default InsightDetailSection;
