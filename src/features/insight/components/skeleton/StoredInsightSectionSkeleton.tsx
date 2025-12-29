import GreetingSkeleton from '@/components/atoms/skeleton/GreetingSkeleton';
import InsightPreviewCardSkeleton from '@/components/organisms/skeleton/InsightPreviewCardSkeleton';

const StoredInsightSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <GreetingSkeleton />

      <InsightPreviewCardSkeleton />
    </div>
  );
};

export default StoredInsightSectionSkeleton;
