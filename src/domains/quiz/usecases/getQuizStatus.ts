"use server";

import fetchQuizStatus from "@/domains/quiz/repositories/fetchInsightStatus";
import { QuizStatus } from "@/domains/quiz/models/quizStatus";

const getQuizStatus = async (quizId: number): Promise<QuizStatus> => {
  const quizStatus: QuizStatus = await fetchQuizStatus(quizId);

  return quizStatus;
};

export default getQuizStatus;
