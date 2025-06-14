import SkeletonItem from "@/components/atoms/SkeletonItem";

const MyProgressTableSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <SkeletonItem styles="w-72 h-9" />

      <SkeletonItem styles="w-full h-36" />
    </div>
  );
};

export default MyProgressTableSkeleton;
