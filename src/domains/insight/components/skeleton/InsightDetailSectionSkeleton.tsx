import clsx from "clsx";

import SkeletonItem from "@/components/atoms/SkeletonItem";
import InsightSectionSkeleton from "@/components/organisms/skeleton/InsightSectionSkeleton";

const InsightDetailSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-end justify-between">
        <SkeletonItem styles={clsx("w-30 h-7", "md:w-36 md:h-8", "lg:w-40 lg:h-9")} />

        <SkeletonItem styles="w-24 h-4" />
      </div>

      <InsightSectionSkeleton />
    </div>
  );
};

export default InsightDetailSectionSkeleton;
