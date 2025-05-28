import SkeletonItem from "@/components/atoms/SkeletonItem";

const InsightSectionSkeleton = () => {
  return (
    <div className="flex flex-col space-y-20">
      <div className="space-y-2">
        <SkeletonItem styles="w-full max-w-xl h-10" />

        <div className="space-y-2">
          <SkeletonItem styles="w-full max-w-md h-6" />
          <SkeletonItem styles="w-full max-w-md h-6" />
          <SkeletonItem styles="w-full max-w-sm h-6" />
          <SkeletonItem styles="w-full max-w-sm h-6" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SkeletonItem styles="w-full max-w-xs h-6" />
        <SkeletonItem styles="w-full max-w-xs h-6" />
      </div>
    </div>
  );
};

export default InsightSectionSkeleton;
