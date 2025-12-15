import { formatDateToYMD } from '@/lib/utils/formatter/date';

import { type InsightPreview } from '@/features/insight/models/insightPreview';

import Heading1 from '@/components/atoms/typography/Heading1';
import Label1 from '@/components/atoms/typography/Label1';

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
      <Heading1 text={insightPreview.subject} />

      <Label1
        text={formatDateToYMD(insightPreview.publishedAt)}
        styles={{ color: 'text-gray-300' }}
      />
    </button>
  );
};

export default InsightPreviewCard;
