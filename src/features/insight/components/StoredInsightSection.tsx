'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

import useStoredInsights from '@/features/insight/hooks/useStoredInsights';
import StoredInsightSectionSkeleton from '@/features/insight/components/skeleton/StoredInsightSectionSkeleton';

import DotLoader from '@/components/atoms/DotLoader';
import InsightPreviewCard from '@/components/organisms/InsightPreviewCard';

const StoredInsightSection = () => {
  const router = useRouter();

  const { ref, inView } = useInView();

  const {
    data: storedInsights,
    isLoading,
    isError,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useStoredInsights();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <StoredInsightSectionSkeleton />;
  if (isError) throw error;
  if (!storedInsights) return null;

  const flatStoredInsights = storedInsights.pages.flatMap((page) => page.data) ?? [];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {flatStoredInsights.map((insightPreview) => {
          const { id, subject, publishedAt } = insightPreview;

          return (
            <InsightPreviewCard
              key={`insight-preview-${id}`}
              id={id}
              subject={subject}
              publishedAt={publishedAt}
              onClick={(insightId) => router.push(`/insight/detail/${insightId}`)}
            />
          );
        })}
      </div>

      {hasNextPage && <div ref={ref}>{isFetchingNextPage && <DotLoader />}</div>}
    </div>
  );
};

export default StoredInsightSection;
