import clsx from "clsx";

import SkeletonItem from "@/components/atoms/SkeletonItem";
import QuizSectionSkeleton from "@/components/organisms/skeleton/QuizSectionSkeleton";

const TodayQuizSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <SkeletonItem styles={clsx("w-full max-w-xs h-7", "md:h-8", "lg:h-9")} />

      <QuizSectionSkeleton />
    </div>
  );
};

export default TodayQuizSectionSkeleton;
