import type { SubInsight } from '@/features/insight/models/sub-insight';

export interface Insight {
  id: string;
  subject: string;
  description: string;
  publishedAt: Date;
  subInsights: SubInsight[];
}
