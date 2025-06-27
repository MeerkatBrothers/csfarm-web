import Seed from "@/../public/svgs/seed.svg";

import { formatDateToYMD } from "@/lib/utils/formatter/date";

import { MyInsightPreview } from "@/domains/insight/models/fragments/myInsightPreview";

import Heading1 from "@/components/atoms/typography/Heading1";
import Label1 from "@/components/atoms/typography/Label1";

interface MyInsightPreviewCardProps {
  myInsightPreview: MyInsightPreview;
  onClick: (insightId: number) => void;
}

const MyInsightPreviewCard = ({ myInsightPreview, onClick }: MyInsightPreviewCardProps) => {
  return (
    <button className="flex flex-col items-start gap-1" onClick={() => onClick(myInsightPreview.insightId)}>
      <div className="flex gap-1">
        <Heading1 text={myInsightPreview.subject} />

        {myInsightPreview.isThreshed && <Seed width={24} />}
      </div>

      <Label1 text={formatDateToYMD(myInsightPreview.publishedAt)} styles={{ color: "text-gray-300" }} />
    </button>
  );
};

export default MyInsightPreviewCard;
