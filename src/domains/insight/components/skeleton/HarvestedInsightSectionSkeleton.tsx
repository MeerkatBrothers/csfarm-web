import SkeletonItem from "@/components/atoms/SkeletonItem";
import InsightPreviewListSkeleton from "@/components/organisms/skeleton/InsightPreviewListSkeleton";

const HarvestedInsightSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      <SkeletonItem styles="w-72 h-9" />

      <InsightPreviewListSkeleton />
    </div>
  );
};

export default HarvestedInsightSectionSkeleton;
