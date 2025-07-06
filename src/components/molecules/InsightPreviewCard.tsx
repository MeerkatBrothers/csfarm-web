import { formatDateToYMD } from "@/lib/utils/formatter/date";

import { InsightPreview } from "@/domains/insight/models/fragments/insightPreview";

import Heading1 from "@/components/atoms/typography/Heading1";
import Label1 from "@/components/atoms/typography/Label1";

interface InsightPreviewCardProps {
  insightPreview: InsightPreview;
  onClick: (insightId: number) => void;
}

const InsightPreviewCard = ({ insightPreview, onClick }: InsightPreviewCardProps) => {
  return (
    <button className="flex flex-col items-start text-start gap-1" onClick={() => onClick(insightPreview.id)}>
      <Heading1 text={insightPreview.subject} />

      <Label1 text={formatDateToYMD(insightPreview.publishedAt)} styles={{ color: "text-gray-300" }} />
    </button>
  );
};

export default InsightPreviewCard;
