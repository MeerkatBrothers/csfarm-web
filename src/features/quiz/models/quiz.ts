import { type QuizChoice } from '@/features/quiz/models/quizChoice';

export interface Quiz {
  id: string;
  insightId: string;
  question: string;
  choices: QuizChoice[];
  publishedAt: Date;
}
