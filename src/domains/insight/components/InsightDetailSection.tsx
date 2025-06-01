"use client";

import { useParams } from "next/navigation";

import { stringToNumber } from "@/lib/utils/transformer/number";
import InvalidParamError from "@/lib/errors/invalidParamError";

import useInsightDetail from "@/domains/insight/hooks/useInsightDetail";

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

  return <InsightSection insight={insightDetail.insight} />;
};

export default InsightDetailSection;
