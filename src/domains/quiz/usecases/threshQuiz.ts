"use server";

import fetchThreshQuiz from "@/domains/quiz/repositories/fetchThreshQuiz";

const threshQuiz = async (quizId: number, choiceId: number): Promise<void> => {
  await fetchThreshQuiz(quizId, choiceId);
};

export default threshQuiz;
