import { useQueryClient, useMutation } from "@tanstack/react-query";

import InvalidFormError from "@/lib/errors/invalidFormError";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";

import PROGRESS_QUERY_KEYS from "@/domains/progress/constants/queryKey";

import QUIZ_QUERY_KEYS from "@/domains/quiz/constants/queryKey";
import threshQuiz from "@/domains/quiz/usecases/threshQuiz";
import { QuizStatus } from "@/domains/quiz/models/quizStatus";

interface ThreshQuizParams {
  quizId: number;
  choiceId: number | null;
}

interface UseThreshQuizParams {
  onSuccess?: () => void;
}

const useThreshQuiz = ({ onSuccess }: UseThreshQuizParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ quizId, choiceId }: ThreshQuizParams) => {
      if (choiceId === null) {
        throw new InvalidFormError("정답을 선택 해 주세요.");
      }

      await threshQuiz(quizId, choiceId);
    },
    onSuccess: (_, params) => {
      queryClient.setQueryData<QuizStatus>(QUIZ_QUERY_KEYS.STATUS(params.quizId), (prev) => (prev ? { ...prev, isThreshed: true } : prev));
      queryClient.invalidateQueries({ queryKey: INSIGHT_QUERY_KEYS.HARVESTED });
      queryClient.invalidateQueries({ queryKey: PROGRESS_QUERY_KEYS.MY });

      onSuccess?.();
    },
  });
};

export default useThreshQuiz;
