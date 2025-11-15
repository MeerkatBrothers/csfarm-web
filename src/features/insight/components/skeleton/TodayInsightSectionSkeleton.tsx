import clsx from "clsx";

import SkeletonItem from "@/components/atoms/SkeletonItem";
import InsightSectionSkeleton from "@/components/organisms/skeleton/InsightSectionSkeleton";

const TodayInsightSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <SkeletonItem styles={clsx("w-36 h-7", "md:w-40 md:h-8", "lg:w-44 lg:h-9")} />

      <InsightSectionSkeleton />
    </div>
  );
};

export default TodayInsightSectionSkeleton;
