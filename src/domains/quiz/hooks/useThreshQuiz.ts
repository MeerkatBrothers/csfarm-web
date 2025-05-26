"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import QUIZ_QUERY_KEYS from "@/domains/quiz/constants/queryKey";
import threshQuiz from "@/domains/quiz/usecases/threshQuiz";
import { QuizStatus } from "@/domains/quiz/models/quizStatus";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";

interface ThreshQuizParams {
  quizId: number;
  choiceId: number;
}

interface UseThreshQuizParams {
  onSuccess?: () => void;
  onError?: (error: Error, variables: ThreshQuizParams) => void;
}

const useHarvestInsight = ({ onSuccess, onError }: UseThreshQuizParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ quizId, choiceId }: ThreshQuizParams) => {
      await threshQuiz(quizId, choiceId);
    },
    onSuccess: (_, variables) => {
      queryClient.setQueryData<QuizStatus>(QUIZ_QUERY_KEYS.STATUS(variables.quizId), (prev) =>
        prev ? { ...prev, isThreshed: true } : prev,
      );
      queryClient.invalidateQueries({ queryKey: INSIGHT_QUERY_KEYS.HARVESTED });

      onSuccess?.();
    },
    onError,
  });
};

export default useHarvestInsight;
