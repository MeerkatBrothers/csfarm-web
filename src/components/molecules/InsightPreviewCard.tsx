import { formatDateToYMD } from "@/lib/utils/formatter/date";

import { InsightPreview } from "@/domains/insight/models/fragments/insightPreview";

import Title3 from "@/components/atoms/typography/Title3";
import Label1 from "@/components/atoms/typography/Label1";

interface InsightPreviewCardProps {
  insightPreview: InsightPreview;
}

const InsightPreviewCard = ({ insightPreview }: InsightPreviewCardProps) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <Title3 text={insightPreview.subject} />

      <Label1 text={formatDateToYMD(insightPreview.publishedAt)} styles={{ textColor: "text-service-gray-medium" }} />
    </div>
  );
};

export default InsightPreviewCard;
