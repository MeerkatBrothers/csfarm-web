import { ErrorBoundary } from "react-error-boundary";

import InsightStorageWelcomeMessage from "@/domains/insight/components/InsightStorageWelcomeMessage";
import StoredInsightSection from "@/domains/insight/components/StoredInsightSection";

import ErrorFallback from "@/components/organisms/ErrorFallback";

const InsightStoragePage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="space-y-10">
        <InsightStorageWelcomeMessage />

        <StoredInsightSection />
      </div>
    </ErrorBoundary>
  );
};

export default InsightStoragePage;
