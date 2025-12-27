import { formatDateToYMD } from '@/shared/utils/formatter/date';

import type { InsightPreview } from '@/features/insight/models/insight.preview';

import Heading from '@/components/atoms/typography/Heading';
import Label from '@/components/atoms/typography/Label';

interface InsightPreviewCardProps {
  insightPreview: InsightPreview;
  onClick: (insightId: string) => void;
}

const InsightPreviewCard = ({ insightPreview, onClick }: InsightPreviewCardProps) => {
  return (
    <button
      className="flex flex-col items-start gap-1 text-start"
      onClick={() => onClick(insightPreview.id)}
    >
      <Heading text={insightPreview.subject} scale={1} />

      <Label
        text={formatDateToYMD(insightPreview.publishedAt)}
        scale={1}
        styles={{ color: 'text-gray-300' }}
      />
    </button>
  );
};

export default InsightPreviewCard;
