import SkeletonItem from '@/components/atoms/SkeletonItem';

const InsightPreviewCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <SkeletonItem key={`insight-preview-card-skeleton-${index}`} className="h-16 w-full" />
        );
      })}
    </div>
  );
};

export default InsightPreviewCardSkeleton;
