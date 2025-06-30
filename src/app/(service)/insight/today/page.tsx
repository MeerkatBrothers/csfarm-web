import { ErrorBoundary } from "react-error-boundary";

import TodayInsightWelcomeMessage from "@/domains/insight/components/TodayInsightWelcomeMessage";
import TodayInsightSection from "@/domains/insight/components/TodayInsightSection";

import ErrorFallback from "@/components/organisms/ErrorFallback";

const TodayInsightPage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="flex flex-col gap-10">
        <TodayInsightWelcomeMessage />

        <TodayInsightSection />
      </div>
    </ErrorBoundary>
  );
};

export default TodayInsightPage;
