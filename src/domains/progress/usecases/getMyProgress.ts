"use server";

import { Result, success, failed } from "@/lib/types/result";

import fetchMyProgress from "@/domains/progress/repositories/fetchMyProfile";
import { MyProgress } from "@/domains/progress/models/myProgress";

const getMyProgress = async (): Promise<Result<MyProgress>> => {
  try {
    const myProgress: MyProgress = await fetchMyProgress();

    return success(myProgress);
  } catch (e) {
    return failed(e);
  }
};

export default getMyProgress;
