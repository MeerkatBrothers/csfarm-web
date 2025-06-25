import { ReactNode } from "react";
import clsx from "clsx";

import Header from "@/components/organisms/layout/Header";
import Main from "@/components/organisms/layout/Main";
import Footer from "@/components/organisms/layout/Footer";

interface ServiceLayoutProps {
  children: ReactNode;
}

const ServiceLayout = ({ children }: Readonly<ServiceLayoutProps>) => {
  return (
    <div className="flex flex-col h-full">
      <header className={clsx("flex justify-center px-4 border-b border-gray-200", "md:px-6")}>
        <Header />
      </header>

      <main className="flex flex-1 justify-center">
        <Main>{children}</Main>
      </main>

      <footer className="flex items-center justify-center h-40 bg-gray-100">
        <Footer />
      </footer>
    </div>
  );
};

export default ServiceLayout;
