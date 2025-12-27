import { cn } from '@/shared/utils/cn';

import SkeletonItem from '@/components/atoms/SkeletonItem';

const WelcomeMessageSkeleton = () => {
  return <SkeletonItem styles={cn('w-full max-w-3xl h-8', 'md:h-9', 'lg:h-10')} />;
};

export default WelcomeMessageSkeleton;
