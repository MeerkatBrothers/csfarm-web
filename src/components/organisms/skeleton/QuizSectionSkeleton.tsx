import clsx from "clsx";

import SkeletonItem from "@/components/atoms/SkeletonItem";

const QuizSectionSkeleton = () => {
  return (
    <div className="space-y-8">
      <SkeletonItem styles={clsx("w-full max-w-2xl h-8", "lg:h-10")} />

      <div className={clsx("space-y-10", "lg:space-y-8")}>
        {Array.from({ length: 4 }).map((_, index) => {
          return <SkeletonItem key={index} styles={clsx("w-full max-w-2xl h-6", "lg:h-8")} />;
        })}
      </div>
    </div>
  );
};

export default QuizSectionSkeleton;
