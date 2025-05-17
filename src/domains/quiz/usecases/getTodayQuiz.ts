import fetchTodayQuiz from "@/domains/quiz/repositories/fetchTodayQuiz";
import { TodayQuiz } from "@/domains/quiz/models/todayQuiz";

const getTodayQuiz = async (): Promise<TodayQuiz> => {
  const todayQuiz: TodayQuiz = await fetchTodayQuiz();

  return todayQuiz;
};

export default getTodayQuiz;
