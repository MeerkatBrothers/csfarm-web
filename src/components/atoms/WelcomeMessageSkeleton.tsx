import SkeletonItem from "@/components/atoms/SkeletonItem";

const WelcomeMessageSkeleton = () => {
  return (
    <div className="space-y-2">
      <SkeletonItem styles="w-full max-w-sm h-6" />
      <SkeletonItem styles="w-full max-w-sm h-6" />
    </div>
  );
};

export default WelcomeMessageSkeleton;
