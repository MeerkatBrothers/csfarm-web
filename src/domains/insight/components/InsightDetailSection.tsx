"use client";

import { useParams } from "next/navigation";

import { stringToNumber } from "@/lib/utils/transformer/number";
import { formatDateToYMD } from "@/lib/utils/formatter/date";
import InvalidParamError from "@/lib/errors/invalidParamError";

import useInsightDetail from "@/domains/insight/hooks/useInsightDetail";

import Title3 from "@/components/atoms/typography/Title3";
import Label1 from "@/components/atoms/typography/Label1";
import InsightSection from "@/components/organisms/InsightSection";
import InsightSectionSkeleton from "@/components/organisms/skeleton/InsightSectionSkeleton";

const InsightDetailSection = () => {
  const params: { insightId: string } = useParams<{ insightId: string }>();
  const insightId: number | null = stringToNumber(params.insightId);
  if (!insightId) {
    throw new InvalidParamError();
  }

  const { data: insightDetail, isLoading, isError, error } = useInsightDetail(insightId);

  if (isLoading) {
    return <InsightSectionSkeleton />;
  }

  if (isError) {
    throw error;
  }

  if (!insightDetail) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Title3 text="지난 수확물 🌾" />

        <Label1 text={formatDateToYMD(insightDetail.insight.publishedAt)} styles={{ color: "text-gray-300" }} />
      </div>

      <InsightSection insight={insightDetail.insight} />
    </div>
  );
};

export default InsightDetailSection;
