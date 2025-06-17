"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";

import useHarvestedInsight from "@/domains/insight/hooks/useHarvestedInsight";
import HarvestedInsightSectionSkeleton from "@/domains/insight/components/skeleton/HarvestedInsightSectionSkeleton";

import Heading1 from "@/components/atoms/typography/Heading1";
import DotLoader from "@/components/atoms/DotLoader";
import MyInsightPreviewList from "@/components/organisms/MyInsightPreviewList";

const HarvestedInsightSection = () => {
  const router = useRouter();

  const { ref, inView } = useInView();

  const { data: harvestedInsight, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useHarvestedInsight();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return <HarvestedInsightSectionSkeleton />;
  }

  if (isError) {
    throw error;
  }

  if (!harvestedInsight) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      <Heading1 text="수확물 목록 🌾" />

      <MyInsightPreviewList
        myInsightPreviews={harvestedInsight.pages.flat() ?? []}
        onClick={(insightId) => router.push(`/insight/detail/${insightId}`)}
      />

      {hasNextPage && <div ref={ref}>{isFetchingNextPage && <DotLoader />}</div>}
    </div>
  );
};

export default HarvestedInsightSection;
