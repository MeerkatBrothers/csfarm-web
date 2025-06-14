import { MyInsightPreview } from "@/domains/insight/models/fragments/myInsightPreview";

import MyInsightPreviewCard from "@/components/molecules/MyInsightPreviewCard";

interface MyInsightPreviewProps {
  myInsightPreviews: MyInsightPreview[];
  onClick: (insightId: number) => void;
}

const MyInsightPreviewList = ({ myInsightPreviews, onClick }: MyInsightPreviewProps) => {
  return (
    <div className="flex flex-col gap-10">
      {myInsightPreviews.map((myInsightPreview, index) => {
        return (
          <button key={index} onClick={() => onClick(myInsightPreview.id)}>
            <MyInsightPreviewCard myInsightPreview={myInsightPreview} />
          </button>
        );
      })}
    </div>
  );
};

export default MyInsightPreviewList;
