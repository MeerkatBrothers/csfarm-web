import clsx from "clsx";

import SkeletonItem from "@/components/atoms/SkeletonItem";

const WelcomeMessageSkeleton = () => {
  return (
    <div className="space-y-2">
      {Array.from({ length: 4 }).map((_, index) => {
        return <SkeletonItem key={index} styles={clsx("w-full max-w-md h-5", "md:h-6", "lg:h-7")} />;
      })}
    </div>
  );
};

export default WelcomeMessageSkeleton;
