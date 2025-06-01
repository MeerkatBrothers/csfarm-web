import clsx from "clsx";

import SkeletonItem from "@/components/atoms/SkeletonItem";

const WelcomeMessageSkeleton = () => {
  return (
    <div className="space-y-2">
      {Array.from({ length: 2 }).map((_, index) => {
        return <SkeletonItem key={index} styles={clsx("w-full max-w-md h-4", "md:h-5", "lg:h-6")} />;
      })}
    </div>
  );
};

export default WelcomeMessageSkeleton;
