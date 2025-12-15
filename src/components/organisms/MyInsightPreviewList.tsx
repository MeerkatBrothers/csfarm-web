import { type HarvestedInsight } from '@/features/harvest/models/harvestedInsight';

import MyInsightPreviewCard from '@/components/molecules/MyInsightPreviewCard';

interface MyInsightPreviewProps {
  myInsightPreviews: HarvestedInsight[];
  onClick: (insightId: string) => void;
}

const MyInsightPreviewList = ({ myInsightPreviews, onClick }: MyInsightPreviewProps) => {
  return (
    <div className="flex flex-col gap-10">
      {myInsightPreviews.map((myInsightPreview, index) => {
        return (
          <MyInsightPreviewCard key={index} myInsightPreview={myInsightPreview} onClick={onClick} />
        );
      })}
    </div>
  );
};

export default MyInsightPreviewList;
