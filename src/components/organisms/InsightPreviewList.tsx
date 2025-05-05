import InsightPreviewCard from "@/components/molecules/InsightPreviewCard";

const InsightPreviewList = () => {
  return (
    <div className="flex flex-col gap-10">
      {Array.from({ length: 7 }).map((_, index) => (
        <InsightPreviewCard key={index} />
      ))}
    </div>
  );
};

export default InsightPreviewList;
