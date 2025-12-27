import Seed from '@/assets/svgs/seed.svg';

import { formatDateToYMD } from '@/shared/utils/formatter/date';

import type { HarvestedInsight } from '@/features/harvest/models/harvested-insight';

import Heading from '@/components/atoms/typography/Heading';
import Label from '@/components/atoms/typography/Label';

interface HarvestedInsightCardProps {
  harvestedInsight: HarvestedInsight;
  onClick: (insightId: string) => void;
}

const HarvestedInsightCard = ({ harvestedInsight, onClick }: HarvestedInsightCardProps) => {
  return (
    <button
      className="flex flex-col items-start gap-1 text-start"
      onClick={() => onClick(harvestedInsight.id)}
    >
      <div className="flex gap-1">
        <Heading text={harvestedInsight.subject} scale={1} />

        {harvestedInsight.isThreshed && <Seed width={24} />}
      </div>

      <Label
        text={formatDateToYMD(harvestedInsight.publishedAt)}
        scale={1}
        styles={{ color: 'text-gray-300' }}
      />
    </button>
  );
};

export default HarvestedInsightCard;
