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
        return (
          <button key={index} onClick={() => onClick(insightPreview.id)}>
            <InsightPreviewCard insightPreview={insightPreview} />
          </button>
        );
      })}
    </div>
  );
};

export default InsightPreviewList;
