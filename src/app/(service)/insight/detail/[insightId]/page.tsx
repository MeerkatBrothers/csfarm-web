import { ErrorBoundary } from 'react-error-boundary';

import InsightDetailSection from '@/features/insight/components/InsightDetailSection';

import ErrorFallback from '@/components/organisms/ErrorFallback';

interface InsightDetailPageProps {
  params: Promise<{ insightId: string }>;
}

const InsightDetailPage = async ({ params }: InsightDetailPageProps) => {
  const insightId = (await params).insightId;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <InsightDetailSection insightId={insightId} />
    </ErrorBoundary>
  );
};

export default InsightDetailPage;
