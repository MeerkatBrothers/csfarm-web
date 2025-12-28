import { ReactNode } from 'react';

import { cn } from '@/shared/utils/cn';

import Header from '@/components/organisms/layout/Header';
import Main from '@/components/organisms/layout/Main';
import Footer from '@/components/organisms/layout/Footer';

interface ServiceLayoutProps {
  children: ReactNode;
}

const ServiceLayout = ({ children }: Readonly<ServiceLayoutProps>) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className={cn('flex justify-center border-b border-gray-200 px-4', 'md:px-6')}>
        <Header />
      </header>

      <main className="flex flex-1 justify-center">
        <Main>{children}</Main>
      </main>

      <footer className="flex h-40 items-center justify-center bg-gray-100">
        <Footer />
      </footer>
    </div>
  );
};

export default ServiceLayout;
