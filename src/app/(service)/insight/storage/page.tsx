import { ErrorBoundary } from 'react-error-boundary';

import StoredInsightSection from '@/features/insight/components/StoredInsightSection';

import Title from '@/components/atoms/typography/Title';
import ErrorFallback from '@/components/organisms/ErrorFallback';

const InsightStoragePage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="flex flex-col gap-10">
        <Title text="지난 수확물을 확인해볼까요?" scale={2} />

        <StoredInsightSection />
      </div>
    </ErrorBoundary>
  );
};

export default InsightStoragePage;
