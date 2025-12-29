import SkeletonItem from '@/components/atoms/SkeletonItem';

const UpdateProfileSectionSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <SkeletonItem className="h-[120px] w-[120px] !rounded-full" />

      <SkeletonItem className="h-14 w-full" />
    </div>
  );
};

export default UpdateProfileSectionSkeleton;
