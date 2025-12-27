'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

import useHarvestedInsights from '@/features/harvest/hooks/useHarvestedInsights';
import HarvestedInsightSectionSkeleton from '@/features/harvest/components/skeleton/HarvestedInsightSectionSkeleton';

import DotLoader from '@/components/atoms/DotLoader';
import Heading from '@/components/atoms/typography/Heading';
import HarvestedInsightList from '@/components/organisms/HarvestedInsightList';

const HarvestedInsightSection = () => {
  const router = useRouter();

  const { ref, inView } = useInView();

  const {
    data: harvestedInsight,
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
  if (!harvestedInsight) return null;

  return (
    <div className="flex flex-col gap-6">
      <Heading text="나의 수확물 목록 🌾" scale={1} />

      <HarvestedInsightList
        harvestedInsights={harvestedInsight.pages.flatMap((page) => page.data) ?? []}
        onClick={(insightId) => router.push(`/insight/detail/${insightId}`)}
      />

      {hasNextPage && <div ref={ref}>{isFetchingNextPage && <DotLoader />}</div>}
    </div>
  );
};

export default HarvestedInsightSection;
