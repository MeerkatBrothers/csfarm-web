import { cn } from '@/shared/utils/cn';

import SkeletonItem from '@/components/atoms/SkeletonItem';

const GreetingSkeleton = () => {
  return <SkeletonItem className={cn('h-6 w-full max-w-xl', 'md:h-7', 'lg:h-8')} />;
};

export default GreetingSkeleton;
