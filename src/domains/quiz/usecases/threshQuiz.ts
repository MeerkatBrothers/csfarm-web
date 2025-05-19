"use server";

import { Result, success, failed } from "@/lib/types/result";

import fetchThreshQuiz from "@/domains/quiz/repositories/fetchThreshQuiz";

const threshQuiz = async (quizId: number, choiceId: number): Promise<Result<null>> => {
  try {
    await fetchThreshQuiz(quizId, choiceId);

    return success(null);
  } catch (e) {
    return failed(e);
  }
};

export default threshQuiz;
