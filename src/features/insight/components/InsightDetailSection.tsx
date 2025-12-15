'use client';

import { useParams } from 'next/navigation';

import { formatDateToYMD } from '@/lib/utils/formatter/date';

import useInsightDetail from '@/features/insight/hooks/useInsightDetail';
import InsightDetailSectionSkeleton from '@/features/insight/components/skeleton/InsightDetailSectionSkeleton';

import Title3 from '@/components/atoms/typography/Title3';
import Label1 from '@/components/atoms/typography/Label1';
import InsightSection from '@/components/organisms/InsightSection';

const InsightDetailSection = () => {
  const params: { insightId: string } = useParams<{ insightId: string }>();
  const insightId = params.insightId;

  const { data: insightDetail, isLoading, isError, error } = useInsightDetail(insightId);

  if (isLoading) {
    return <InsightDetailSectionSkeleton />;
  }

  if (isError) {
    throw error;
  }

  if (!insightDetail) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-end justify-between">
        <Title3 text="지난 수확물 🌾" />

        <Label1
          text={formatDateToYMD(insightDetail.insight.publishedAt)}
          styles={{ color: 'text-gray-300' }}
        />
      </div>

      <InsightSection insight={insightDetail.insight} />
    </div>
  );
};

export default InsightDetailSection;
