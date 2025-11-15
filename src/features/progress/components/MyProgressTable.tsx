'use client';

import { useMemo } from 'react';

import useMyProgress from '@/features/progress/hooks/useMyProgress';
import MyProgressTableSkeleton from '@/features/progress/components/skeleton/MyProgressTableSkeleton';

import Heading1 from '@/components/atoms/typography/Heading1';
import HarvestCounter from '@/components/atoms/HarvestCounter';
import ProgressDescription from '@/components/atoms/ProgressDescription';
import ProgressTable from '@/components/organisms/ProgressTable';

const MyProgressTable = () => {
  const { data: myProgress, isLoading, isError, error } = useMyProgress();

  const harvestedCount: number = useMemo(() => {
    return myProgress
      ? Array.from(myProgress.values()).filter((progress) => progress.isThreshed).length
      : 0;
  }, [myProgress]);

  if (isLoading) {
    return <MyProgressTableSkeleton />;
  }

  if (isError) {
    throw error;
  }

  if (!myProgress) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-end justify-between">
        <Heading1 text="나의 논밭 🌾" />

        <HarvestCounter harvestCount={harvestedCount} />
      </div>

      <div className="overflow-x-scroll">
        <ProgressTable progresses={myProgress} />
      </div>

      <div className="flex gap-3 self-end">
        <ProgressDescription description="수확" color="bg-secondary-500" />

        <ProgressDescription description="타작" color="bg-primary-500" />
      </div>
    </div>
  );
};

export default MyProgressTable;
