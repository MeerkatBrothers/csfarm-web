import { Result, success, failed } from "@/lib/types/result";

import fetchTodayQuiz from "@/domains/quiz/repositories/fetchTodayQuiz";
import { TodayQuiz } from "@/domains/quiz/models/todayQuiz";

const getTodayQuiz = async (): Promise<Result<TodayQuiz>> => {
  try {
    const todayQuiz: TodayQuiz = await fetchTodayQuiz();

    return success(todayQuiz);
  } catch (e) {
    return failed(e);
  }
};

export default getTodayQuiz;
