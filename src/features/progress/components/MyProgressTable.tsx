'use client';

import useMyProgress from '@/features/progress/hooks/useMyProgress';
import MyProgressTableSkeleton from '@/features/progress/components/skeleton/MyProgressTableSkeleton';

import ProgressHint from '@/components/atoms/ProgressHint';
import Headline from '@/components/atoms/typography/Headline';
import ProgressTable from '@/components/organisms/ProgressTable';

interface MyProgressTableProps {
  year?: number;
}

const MyProgressTable = ({ year = 2025 }: MyProgressTableProps) => {
  const { data: myProgress, isLoading, isError, error } = useMyProgress(year);

  if (isLoading) return <MyProgressTableSkeleton />;
  if (isError) throw error;
  if (!myProgress) return null;

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-100 px-8 py-6">
      <Headline text={`${year}년 활동 현황`} scale={1} />

      <div className="overflow-x-scroll">
        <ProgressTable progresses={myProgress} />
      </div>

      <div className="flex gap-4 self-end">
        <ProgressHint description="수확" color="bg-secondary-500" />

        <ProgressHint description="타작" color="bg-primary-500" />
      </div>
    </div>
  );
};

export default MyProgressTable;
