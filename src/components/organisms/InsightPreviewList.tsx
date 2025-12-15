import { type InsightPreview } from '@/features/insight/models/insightPreview';

import InsightPreviewCard from '@/components/molecules/InsightPreviewCard';

interface InsightPreviewProps {
  insightPreviews: InsightPreview[];
  onClick: (insightId: string) => void;
}

const InsightPreviewList = ({ insightPreviews, onClick }: InsightPreviewProps) => {
  return (
    <div className="flex flex-col gap-10">
      {insightPreviews.map((insightPreview, index) => {
        return <InsightPreviewCard key={index} insightPreview={insightPreview} onClick={onClick} />;
      })}
    </div>
  );
};

export default InsightPreviewList;
