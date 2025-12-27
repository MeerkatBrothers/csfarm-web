import { cn } from '@/shared/utils/cn';

interface SkeletonItemProps {
  styles?: string;
}

const SkeletonItem = ({ styles }: SkeletonItemProps) => {
  return <div className={cn('animate-pulse rounded-lg bg-gray-100', styles)} />;
};

export default SkeletonItem;
