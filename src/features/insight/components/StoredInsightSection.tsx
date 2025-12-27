'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

import useStoredInsights from '@/features/insight/hooks/useStoredInsights';
import StoredInsightSectionSkeleton from '@/features/insight/components/skeleton/StoredInsightSectionSkeleton';

import DotLoader from '@/components/atoms/DotLoader';
import InsightPreviewList from '@/components/organisms/InsightPreviewList';

const StoredInsightSection = () => {
  const router = useRouter();

  const { ref, inView } = useInView();

  const {
    data: storedInsight,
    isLoading,
    isError,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useStoredInsights();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <StoredInsightSectionSkeleton />;
  if (isError) throw error;
  if (!storedInsight) return null;

  return (
    <div className="flex flex-col gap-6">
      <InsightPreviewList
        insightPreviews={storedInsight.pages.flatMap((page) => page.data) ?? []}
        onClick={(insightId) => router.push(`/insight/detail/${insightId}`)}
      />

      {hasNextPage && <div ref={ref}>{isFetchingNextPage && <DotLoader />}</div>}
    </div>
  );
};

export default StoredInsightSection;
