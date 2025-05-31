import { InsightPreview } from "@/domains/insight/models/fragments/insightPreview";

import InsightPreviewCard from "@/components/molecules/InsightPreviewCard";

interface InsightPreviewProps {
  insightPreviews: InsightPreview[];
}

const InsightPreviewList = ({ insightPreviews }: InsightPreviewProps) => {
  return (
    <div className="flex flex-col gap-10">
      {insightPreviews.map((insightPreview, index) => (
        <InsightPreviewCard key={index} insightPreview={insightPreview} />
      ))}
    </div>
  );
};

export default InsightPreviewList;
