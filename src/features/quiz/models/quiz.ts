import type { QuizChoice } from '@/features/quiz/models/quiz-choice';

export interface Quiz {
  id: string;
  insightId: string;
  question: string;
  choices: QuizChoice[];
  publishedAt: Date;
}
