import { ReactNode } from "react";
import clsx from "clsx";

import Header from "@/components/organisms/layout/Header";
import Content from "@/components/organisms/layout/Content";

interface ServiceLayoutProps {
  children: ReactNode;
}

const ServiceLayout = ({ children }: Readonly<ServiceLayoutProps>) => {
  return (
    <div className="flex flex-col h-full">
      <header className={clsx("flex justify-center px-4 border-b border-gray-200", "md:px-6")}>
        <Header />
      </header>

      <Content>{children}</Content>
    </div>
  );
};

export default ServiceLayout;
