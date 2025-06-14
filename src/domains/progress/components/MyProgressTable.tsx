"use client";

import { useMemo } from "react";

import useMyProfile from "@/domains/profile/hooks/useMyProfile";
import useMyProgress from "@/domains/progress/hooks/useMyProgress";

import Heading1 from "@/components/atoms/typography/Heading1";
import HarvestCounter from "@/components/atoms/HarvestCounter";
import ProgressTable from "@/components/organisms/ProgressTable";
import MyProgressTableSkeleton from "@/components/organisms/skeleton/MyProgressTableSkeleton";

const MyProgressTable = () => {
  const { data: myProfile } = useMyProfile();

  const { data: myProgress, isLoading, isError, error } = useMyProgress();

  const harvestedCount: number = useMemo(() => {
    return myProgress ? Array.from(myProgress.values()).filter((progress) => progress.isThreshed).length : 0;
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
      <div className="flex justify-between items-end">
        <Heading1 text={`${myProfile?.profile.nickname ?? "익명"} 님의 논밭 🌾`} />

        <HarvestCounter harvestCount={harvestedCount} />
      </div>

      <div className="overflow-x-scroll">
        <ProgressTable progresses={myProgress} />
      </div>
    </div>
  );
};

export default MyProgressTable;
