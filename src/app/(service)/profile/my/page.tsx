import { ErrorBoundary } from 'react-error-boundary';

import MyProfileSection from '@/features/profile/components/MyProfileSection';

import MyProgressTable from '@/features/progress/components/MyProgressTable';

import HarvestedInsightSection from '@/features/insight/components/HarvestedInsightSection';

import ErrorFallback from '@/components/organisms/ErrorFallback';

const MyProfilePage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="flex flex-col gap-20">
        <MyProfileSection />

        <MyProgressTable />

        <HarvestedInsightSection />
      </div>
    </ErrorBoundary>
  );
};

export default MyProfilePage;
