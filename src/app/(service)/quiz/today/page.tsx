import { ErrorBoundary } from 'react-error-boundary';

import TodayQuizSection from '@/features/quiz/components/TodayQuizSection';

import ErrorFallback from '@/components/organisms/ErrorFallback';

const TodayQuestionPage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <TodayQuizSection />
    </ErrorBoundary>
  );
};

export default TodayQuestionPage;
