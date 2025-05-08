import Title3 from "@/components/atoms/typography/Title3";
import Label1 from "@/components/atoms/typography/Label1";

const InsightPreviewCard = () => {
  return (
    <div className="flex flex-col gap-1">
      <Title3 text="http와 https의 차이가 뭔가요?" />

      <Label1 text="2025-05-04" styles={{ textColor: "text-service-gray-medium" }} />
    </div>
  );
};

export default InsightPreviewCard;
