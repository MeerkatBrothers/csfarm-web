'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

import useHarvestedInsights from '@/features/harvest/hooks/useHarvestedInsights';
import HarvestedInsightSectionSkeleton from '@/features/harvest/components/skeleton/HarvestedInsightSectionSkeleton';

import DotLoader from '@/components/atoms/DotLoader';
import Heading from '@/components/atoms/typography/Heading';
import HarvestedInsightCard from '@/components/organisms/HarvestedInsightCard';

const HarvestedInsightSection = () => {
  const router = useRouter();

  const { ref, inView } = useInView();

  const {
    data: harvestedInsights,
    isLoading,
    isError,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useHarvestedInsights();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <HarvestedInsightSectionSkeleton />;
  if (isError) throw error;
  if (!harvestedInsights) return null;

  const flatHarvestInsights = harvestedInsights.pages.flatMap((page) => page.data) ?? [];

  return (
    <div className="flex flex-col gap-6">
      <Heading text="나의 수확물 목록 🌾" scale={1} />

      <div className="flex flex-col gap-4">
        {flatHarvestInsights.map((harvestInsight) => {
          const { id, subject, isThreshed, publishedAt } = harvestInsight;

          return (
            <HarvestedInsightCard
              key={`harvested-insight-${id}`}
              id={id}
              subject={subject}
              isThreshed={isThreshed}
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

export default HarvestedInsightSection;
