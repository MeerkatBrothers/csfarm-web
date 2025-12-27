import { notFound } from 'next/navigation';
import { ErrorBoundary } from 'react-error-boundary';

import InsightDetailSection from '@/features/insight/components/InsightDetailSection';

import ErrorFallback from '@/components/organisms/ErrorFallback';

interface InsightDetailPageProps {
  params: { insightId?: string };
}

const InsightDetailPage = ({ params }: InsightDetailPageProps) => {
  const insightId = params.insightId;
  if (!insightId) notFound();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <InsightDetailSection insightId={insightId} />
    </ErrorBoundary>
  );
};

export default InsightDetailPage;
