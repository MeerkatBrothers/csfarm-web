import { ClassValue } from 'clsx';

import { cn } from '@/shared/utils/cn';

interface SkeletonItemProps {
  className?: ClassValue;
}

const SkeletonItem = ({ className }: SkeletonItemProps) => {
  return <div className={cn('animate-pulse rounded-lg bg-gray-100', className)} />;
};

export default SkeletonItem;
