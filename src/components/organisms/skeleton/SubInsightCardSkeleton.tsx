import SkeletonItem from '@/components/atoms/SkeletonItem';

const SubInsightCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 3 }).map((_, index) => {
        return <SkeletonItem key={`sub-insight-card-skeleton-${index}`} className="h-16 w-full" />;
      })}
    </div>
  );
};

export default SubInsightCardSkeleton;
