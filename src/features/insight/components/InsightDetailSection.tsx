'use client';

import { formatDateToYMD } from '@/shared/utils/formatter/date';

import useInsightDetail from '@/features/insight/hooks/useInsightDetail';
import InsightDetailSectionSkeleton from '@/features/insight/components/skeleton/InsightDetailSectionSkeleton';

import Title from '@/components/atoms/typography/Title';
import Label from '@/components/atoms/typography/Label';
import InsightSection from '@/components/organisms/InsightSection';

interface InsightDetailSectionProps {
  insightId: string;
}

const InsightDetailSection = ({ insightId }: InsightDetailSectionProps) => {
  const { data: insightDetail, isLoading, isError, error } = useInsightDetail(insightId);

  if (isLoading) return <InsightDetailSectionSkeleton />;
  if (isError) throw error;
  if (!insightDetail) return null;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-end justify-between">
        <Title text="지난 수확물 🌾" scale={3} />

        <Label
          text={formatDateToYMD(insightDetail.publishedAt)}
          scale={1}
          styles={{ color: 'text-gray-300' }}
        />
      </div>

      <InsightSection insight={insightDetail} />
    </div>
  );
};

export default InsightDetailSection;
