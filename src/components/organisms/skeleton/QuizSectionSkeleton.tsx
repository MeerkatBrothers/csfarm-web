import clsx from "clsx";

import SkeletonItem from "@/components/atoms/SkeletonItem";

const QuizSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-8">
      <SkeletonItem styles={clsx("w-full h-16", "md:h-17", "lg:h-18")} />

      <div className="flex flex-col gap-14">
        {Array.from({ length: 4 }).map((_, index) => {
          return <SkeletonItem key={index} styles={clsx("w-full h-5")} />;
        })}
      </div>
    </div>
  );
};

export default QuizSectionSkeleton;
