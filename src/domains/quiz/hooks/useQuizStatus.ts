"use client";

import { useQuery } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import QUIZ_QUERY_KEYS from "@/domains/quiz/constants/queryKey";
import getQuizStatus from "@/domains/quiz/usecases/getQuizStatus";
import { QuizStatus } from "@/domains/quiz/models/quizStatus";

const useQuizStatus = (quizId: number) => {
  return useQuery<QuizStatus>({
    queryKey: QUIZ_QUERY_KEYS.STATUS(quizId),
    queryFn: async () => {
      const quizStatusResult: Result<QuizStatus> = await getQuizStatus(quizId);
      if (!quizStatusResult.ok) {
        throw new ResultError(quizStatusResult.message, quizStatusResult.statusCode);
      }

      return quizStatusResult.data;
    },
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
  });
};

export default useQuizStatus;
