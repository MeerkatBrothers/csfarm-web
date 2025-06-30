import { ErrorBoundary } from "react-error-boundary";

import StoredInsightSection from "@/domains/insight/components/StoredInsightSection";

import Title2 from "@/components/atoms/typography/Title2";
import ErrorFallback from "@/components/organisms/ErrorFallback";

const InsightStoragePage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="flex flex-col gap-10">
        <Title2 text="지난 수확물을 확인해볼까요?" />

        <StoredInsightSection />
      </div>
    </ErrorBoundary>
  );
};

export default InsightStoragePage;
