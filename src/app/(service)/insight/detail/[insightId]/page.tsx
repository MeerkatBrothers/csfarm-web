import { ErrorBoundary } from "react-error-boundary";

import InsightDetailSection from "@/domains/insight/components/InsightDetailSection";

import ErrorFallback from "@/components/organisms/ErrorFallback";

const InsightDetailPage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <InsightDetailSection />
    </ErrorBoundary>
  );
};

export default InsightDetailPage;
