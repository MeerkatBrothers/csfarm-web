import { ErrorBoundary } from "react-error-boundary";

import TodayInsightWelcomeMessage from "@/domains/insight/components/TodayInsightWelcomeMessage";
import TodayInsightSection from "@/domains/insight/components/TodayInsightSection";

const TodayInsightPage = () => {
  return (
    <div className="space-y-10">
      <TodayInsightWelcomeMessage />

      <ErrorBoundary fallback={<div>에러</div>}>
        <TodayInsightSection />
      </ErrorBoundary>
    </div>
  );
};

export default TodayInsightPage;
