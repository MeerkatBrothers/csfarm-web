import InsightCardSkeleton from '@/components/organisms/skeleton/InsightCardSkeleton';
import SubInsightCardSkeleton from '@/components/organisms/skeleton/SubInsightCardSkeleton';

const InsightDetailSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-12">
      <InsightCardSkeleton />

      <SubInsightCardSkeleton />
    </div>
  );
};

export default InsightDetailSectionSkeleton;
