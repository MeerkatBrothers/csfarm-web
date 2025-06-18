import { ErrorBoundary } from "react-error-boundary";

import MyProfileSection from "@/domains/profile/components/MyProfileSection";

import MyProgressTable from "@/domains/progress/components/MyProgressTable";

import HarvestedInsightSection from "@/domains/insight/components/HarvestedInsightSection";

import ErrorFallback from "@/components/organisms/ErrorFallback";

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
