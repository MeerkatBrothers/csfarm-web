import { isSameDay } from 'date-fns';

import { cn } from '@/shared/utils/cn';
import { formatDateToYMD } from '@/shared/utils/formatter/date';

import Heading from '@/components/atoms/typography/Heading';
import Headline from '@/components/atoms/typography/Headline';
import Body from '@/components/atoms/typography/Body';

interface InsightSectionProps {
  subject: string;
  description: string;
  publishedAt: Date;
}

const InsightCard = ({ subject, description, publishedAt }: InsightSectionProps) => {
  const getDateLabel = (): string => {
    if (isSameDay(publishedAt, new Date())) return '🌾 오늘의 수확물';

    return formatDateToYMD(publishedAt);
  };

  return (
    <div className={cn('flex flex-col gap-2 rounded-lg bg-gray-100 p-6', 'md:p-7', 'lg:p-8')}>
      <Headline text={getDateLabel()} scale={1} styles={{ color: 'text-primary-500' }} />

      <div className="flex flex-col gap-6">
        <Heading text={subject} scale={1} />

        <Body text={description} scale={1} />
      </div>
    </div>
  );
};

export default InsightCard;
