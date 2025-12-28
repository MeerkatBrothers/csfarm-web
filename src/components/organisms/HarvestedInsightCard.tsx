import Seed from '@/assets/svgs/seed.svg';

import { cn } from '@/shared/utils/cn';
import { formatDateToYMD } from '@/shared/utils/formatter/date';

import Headline from '@/components/atoms/typography/Headline';
import Label from '@/components/atoms/typography/Label';

interface HarvestedInsightCardProps {
  id: string;
  subject: string;
  isThreshed: boolean;
  publishedAt: Date;
  onClick: (insightId: string) => void;
}

const HarvestedInsightCard = ({
  id,
  subject,
  isThreshed,
  publishedAt,
  onClick,
}: HarvestedInsightCardProps) => {
  return (
    <button
      className={cn(
        'flex items-center justify-between gap-8 overflow-hidden rounded-lg bg-gray-100 px-8 py-6',
        'md:px-9',
        'lg:px-10',
      )}
      onClick={() => onClick(id)}
    >
      <div className="flex gap-1">
        <Headline text={subject} scale={1} truncate />

        {isThreshed && <Seed width={24} />}
      </div>

      <Label text={formatDateToYMD(publishedAt)} scale={1} styles={{ color: 'text-gray-400' }} />
    </button>
  );
};

export default HarvestedInsightCard;
