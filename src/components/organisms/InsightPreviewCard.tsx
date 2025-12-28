import { cn } from '@/shared/utils/cn';
import { formatDateToYMD } from '@/shared/utils/formatter/date';

import Body from '@/components/atoms/typography/Body';
import Label from '@/components/atoms/typography/Label';

interface InsightPreviewCardProps {
  id: string;
  subject: string;
  publishedAt: Date;
  onClick: (insightId: string) => void;
}

const InsightPreviewCard = ({ id, subject, publishedAt, onClick }: InsightPreviewCardProps) => {
  return (
    <button
      className={cn(
        'flex items-center justify-between gap-8 overflow-hidden rounded-lg bg-gray-100 px-8 py-6',
        'md:px-9',
        'lg:px-10',
      )}
      onClick={() => onClick(id)}
    >
      <div className="min-w-0 flex-1 text-start">
        <Body text={subject} scale={1} truncate styles={{ weight: 'font-bold' }} />
      </div>

      <Label text={formatDateToYMD(publishedAt)} scale={1} styles={{ color: 'text-gray-400' }} />
    </button>
  );
};

export default InsightPreviewCard;
