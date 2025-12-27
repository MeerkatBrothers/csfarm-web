import { cn } from '@/shared/utils/cn';

import Caption from '@/components/atoms/typography/Caption';

interface ProgressDescriptionProps {
  description: string;
  color: string;
}

const ProgressDescription = ({ description, color }: ProgressDescriptionProps) => {
  return (
    <div className="flex gap-1">
      <div className={cn('h-4 w-4', color)} />

      <Caption text={description} scale={1} />
    </div>
  );
};

export default ProgressDescription;
