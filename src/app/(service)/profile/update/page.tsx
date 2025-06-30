import { ErrorBoundary } from "react-error-boundary";

import UpdateProfileSection from "@/domains/profile/components/UpdateProfileSection";

import ErrorFallback from "@/components/organisms/ErrorFallback";

const UpdateProfilePage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <UpdateProfileSection />
    </ErrorBoundary>
  );
};

export default UpdateProfilePage;
