import clsx from "clsx";

import SkeletonItem from "@/components/atoms/SkeletonItem";

const InsightSectionSkeleton = () => {
  return (
    <div className="space-y-20">
      <div className="space-y-4">
        <SkeletonItem styles={clsx("w-full max-w-2xl h-8", "lg:h-10")} />

        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, index) => {
            return <SkeletonItem key={index} styles="w-full max-w-md h-6" />;
          })}
        </div>
      </div>

      <div className="space-y-6">
        {Array.from({ length: 2 }).map((_, index) => {
          return <SkeletonItem key={index} styles={clsx("w-full max-w-xs h-6", "md:h-7", "lg:h-8")} />;
        })}
      </div>
    </div>
  );
};

export default InsightSectionSkeleton;
