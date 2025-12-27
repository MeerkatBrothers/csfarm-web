import { cn } from '@/shared/utils/cn';
import { formatDateToYMD } from '@/shared/utils/formatter/date';

import type { Progress } from '@/features/progress/models/progress';

interface ProgressCellProps {
  date: Date;
  progress?: Progress;
}

const ProgressCell = ({ date, progress }: ProgressCellProps) => {
  const color = progress?.isThreshed
    ? 'bg-primary-500'
    : progress?.isHarvested
      ? 'bg-secondary-500'
      : 'bg-gray-100';

  return <td className={cn('h-4 w-4', color)} title={formatDateToYMD(date)}></td>;
};

export default ProgressCell;
