import SkeletonItem from '@/components/atoms/SkeletonItem';
import InsightPreviewCardSkeleton from '@/components/organisms/skeleton/InsightPreviewCardSkeleton';

const HarvestedInsightSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      <SkeletonItem className="h-9 w-72" />

      <InsightPreviewCardSkeleton />
    </div>
  );
};

export default HarvestedInsightSectionSkeleton;
