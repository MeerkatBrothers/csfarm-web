import { cn } from '@/shared/utils/cn';

import Caption from '@/components/atoms/typography/Caption';

interface ProgressHintProps {
  description: string;
  color: string;
}

const ProgressHint = ({ description, color }: ProgressHintProps) => {
  return (
    <div className="flex items-center gap-1">
      <div className={cn('h-3 w-3', color)} />

      <Caption text={description} scale={1} />
    </div>
  );
};

export default ProgressHint;
