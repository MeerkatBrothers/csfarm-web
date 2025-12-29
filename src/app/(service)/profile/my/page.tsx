import { ErrorBoundary } from 'react-error-boundary';

import MyProfileSection from '@/features/profile/components/MyProfileSection';

import HarvestedInsightSection from '@/features/harvest/components/HarvestedInsightSection';

import MyProgressTable from '@/features/progress/components/MyProgressTable';

import ErrorFallback from '@/components/organisms/ErrorFallback';

const MyProfilePage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="flex flex-col gap-12">
        <MyProfileSection />

        <MyProgressTable />

        <HarvestedInsightSection />
      </div>
    </ErrorBoundary>
  );
};

export default MyProfilePage;
