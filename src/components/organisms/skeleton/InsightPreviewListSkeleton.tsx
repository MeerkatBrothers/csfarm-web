import clsx from "clsx";

import SkeletonItem from "@/components/atoms/SkeletonItem";

const InsightPreviewListSkeleton = () => {
  return (
    <div className="space-y-6">
      <SkeletonItem styles="w-72 h-8" />

      <div className="space-y-9">
        {Array.from({ length: 7 }).map((_, index) => {
          return (
            <div key={index} className="space-y-2">
              <SkeletonItem styles={clsx("w-full max-w-md h-6", "md:h-7", "lg:h-8")} />

              <SkeletonItem styles="w-24 h-5" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InsightPreviewListSkeleton;
