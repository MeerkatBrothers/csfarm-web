import { ErrorBoundary } from 'react-error-boundary';

import StoredInsightSection from '@/features/insight/components/StoredInsightSection';

import ErrorFallback from '@/components/organisms/ErrorFallback';

const InsightStoragePage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <StoredInsightSection />
    </ErrorBoundary>
  );
};

export default InsightStoragePage;
