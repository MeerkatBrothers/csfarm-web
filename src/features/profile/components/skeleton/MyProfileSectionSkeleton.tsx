import clsx from "clsx";

import SkeletonItem from "@/components/atoms/SkeletonItem";

const MyProfileSectionSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <SkeletonItem styles="w-[120px] h-[120px] !rounded-full" />

      <SkeletonItem styles={clsx("w-xs h-6", "md:h-7", "lg:h-8")} />
    </div>
  );
};

export default MyProfileSectionSkeleton;
