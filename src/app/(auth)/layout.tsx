import { ReactNode, Suspense } from "react";

import DotLoader from "@/components/atoms/DotLoader";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <Suspense fallback={<DotLoader />}>{children}</Suspense>;
};

export default AuthLayout;
