import { ErrorBoundary } from "react-error-boundary";

import UpdateProfileSection from "@/domains/profile/components/UpdateProfileSection";

import ErrorFallback from "@/components/organisms/ErrorFallback";

const UpdateProfilePage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="flex flex-col gap-20">
        <UpdateProfileSection />
      </div>
    </ErrorBoundary>
  );
};

export default UpdateProfilePage;
