"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import QUIZ_QUERY_KEYS from "@/domains/quiz/constants/queryKey";
import threshQuiz from "@/domains/quiz/usecases/threshQuiz";
import { QuizStatus } from "@/domains/quiz/models/quizStatus";

interface UseThreshQuizParams {
  onSuccess?: () => void;
  onError?: (error: Error, choiceResult: ThreshQuizParams) => void;
}

interface ThreshQuizParams {
  quizId: number;
  choiceId: number;
}

const useHarvestInsight = ({ onSuccess, onError }: UseThreshQuizParams) => {
  const queryClient = useQueryClient();

  const updateQuizStatusCache = (quizId: number): void => {
    queryClient.setQueryData<QuizStatus>(QUIZ_QUERY_KEYS.STATUS(quizId), (prev) => (prev ? { ...prev, isThreshed: true } : prev));
  };

  return useMutation({
    mutationFn: async ({ quizId, choiceId }: ThreshQuizParams) => {
      const threshQuizResult: Result<null> = await threshQuiz(quizId, choiceId);
      if (!threshQuizResult.ok) {
        throw new ResultError(threshQuizResult.message, threshQuizResult.statusCode);
      }
    },
    onSuccess: (_, params) => {
      updateQuizStatusCache(params.quizId);

      onSuccess?.();
    },
    onError: (error, params) => {
      onError?.(error, params);
    },
  });
};

export default useHarvestInsight;
