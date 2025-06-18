import SkeletonItem from "@/components/atoms/SkeletonItem";

const InsightSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-20">
      <SkeletonItem styles="w-full h-52" />

      <div className="flex flex-col gap-4">
        {Array.from({ length: 2 }).map((_, index) => {
          return <SkeletonItem key={index} styles="w-full h-16" />;
        })}
      </div>
    </div>
  );
};

export default InsightSectionSkeleton;
