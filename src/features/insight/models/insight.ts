import { type SubInsight } from '@/features/insight/models/subInsight';

export interface Insight {
  id: string;
  subject: string;
  description: string;
  subInsights: SubInsight[];
  publishedAt: Date;
}
