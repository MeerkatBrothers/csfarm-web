import clsx from "clsx";

import SkeletonItem from "@/components/atoms/SkeletonItem";

const InsightSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-4">
        <SkeletonItem styles={clsx("w-full max-w-xs h-7", "md:h-8", "lg:h-9")} />

        <SkeletonItem styles={clsx("w-full h-52")} />
      </div>

      <div className="flex flex-col gap-4">
        {Array.from({ length: 2 }).map((_, index) => {
          return <SkeletonItem key={index} styles={clsx("w-full h-16")} />;
        })}
      </div>
    </div>
  );
};

export default InsightSectionSkeleton;
