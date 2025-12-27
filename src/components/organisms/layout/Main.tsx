import { ReactNode } from 'react';

import { cn } from '@/shared/utils/cn';

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: Readonly<MainProps>) => {
  return <div className={cn('w-full max-w-5xl p-6', 'md:p-12')}>{children}</div>;
};

export default Main;
