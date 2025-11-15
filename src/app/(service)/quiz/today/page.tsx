import { ErrorBoundary } from 'react-error-boundary';

import TodayQuizWelcomeMessage from '@/features/quiz/components/TodayQuizWelcomeMessage';
import TodayQuizSection from '@/features/quiz/components/TodayQuizSection';

import ErrorFallback from '@/components/organisms/ErrorFallback';

const TodayQuestionPage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="flex flex-col gap-10">
        <TodayQuizWelcomeMessage />

        <TodayQuizSection />
      </div>
    </ErrorBoundary>
  );
};

export default TodayQuestionPage;
