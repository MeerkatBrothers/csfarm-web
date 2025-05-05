import clsx from "clsx";

import Header from "@/components/organisms/layout/Header";
import Content from "@/components/organisms/layout/Content";

interface ServiceLayoutProps {
  children: React.ReactNode;
}

const ServiceLayout = ({ children }: Readonly<ServiceLayoutProps>) => {
  return (
    <div className="flex flex-col h-full">
      <header
        className={clsx(
          "flex justify-center border-b border-service-gray-medium",
          "px-4 md:px-6"
        )}
      >
        <Header />
      </header>

      <div className="flex flex-1 justify-center">
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default ServiceLayout;
