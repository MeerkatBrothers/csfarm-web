import { InsightPreview } from "@/domains/insight/models/fragments/insightPreview";

import InsightPreviewCard from "@/components/molecules/InsightPreviewCard";

interface InsightPreviewProps {
  insightPreviews: InsightPreview[];
  onClick: (insightId: number) => void;
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
