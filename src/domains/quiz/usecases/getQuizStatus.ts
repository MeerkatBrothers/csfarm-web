"use server";

import { Result, success, failed } from "@/lib/types/result";

import fetchQuizStatus from "@/domains/quiz/repositories/fetchInsightStatus";
import { QuizStatus } from "@/domains/quiz/models/quizStatus";

const getQuizStatus = async (quizId: number): Promise<Result<QuizStatus>> => {
  try {
    const quizStatus: QuizStatus = await fetchQuizStatus(quizId);

    return success(quizStatus);
  } catch (e) {
    return failed(e);
  }
};

export default getQuizStatus;
