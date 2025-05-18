"use server";

import fetchMyProgress from "@/domains/progress/repositories/fetchMyProfile";
import { MyProgress } from "@/domains/progress/models/myProgress";

const getMyProgress = async (): Promise<MyProgress> => {
  const myProgress: MyProgress = await fetchMyProgress();

  return myProgress;
};

export default getMyProgress;
