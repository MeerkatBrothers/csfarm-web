import SkeletonItem from "@/components/atoms/SkeletonItem";

const UpdateProfileSectionSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <SkeletonItem styles="w-[120px] h-[120px] !rounded-full" />

      <SkeletonItem styles="w-full h-14" />
    </div>
  );
};

export default UpdateProfileSectionSkeleton;
